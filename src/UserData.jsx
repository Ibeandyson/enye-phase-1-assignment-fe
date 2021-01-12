import {useEffect, useState} from 'react';
import UserCard from './UserCard';
import axios from 'axios';
// import Pagination from 'react-js-pagination';
import Pagination from 'reactjs-hooks-pagination';

export default function UserData(props) {
    const [data, setData] = useState([]);
    const [totalRecords, setTotalRecords] = useState();
    const [activePage, setActivePage] = useState(1);

    //======== API URL =============
    let url = 'https://api.enye.tech/v1/challenge/records';

    // ========== GET API CALL FOR USER DATA =======
    const loadUserData = () => {
        axios
            .get(`${url}`)
            .then(res => {
                setData(res.data.records.profiles);
                setTotalRecords(res.data.size);
            })
            .catch(err => {
                console.log(err);
            });
    };

    // =========== LOGIC FOR DISPLAYIN THE DATA IN PAGINATION =============
    const dataPerPage = 20;
    const indexOfLastData = activePage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = data.slice(indexOfFirstData, indexOfLastData);

    //======== FUNCTION TO CHANGE PAGE =============
    const handlePageChange = pageNumber => {
        console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);
    };

    useEffect(() => {
        loadUserData();
    }, []);

    return (
        <div>
            <UserCard currentData={currentData} {...props} />

            <div className="d-flex flex-row py-4 justify-content-center">
                <Pagination
                  color="red"
                    activePage={activePage}
                    totalRecords={totalRecords}
                    pageLimit={20}
                    pageRangeDisplayed={1}
                    onChangePage={handlePageChange}
                />
            </div>
        </div>
    );
}
