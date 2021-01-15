import {useEffect, useState} from 'react';
import UserCard from './UserCard';
import axios from 'axios';
import Pagination from 'reactjs-hooks-pagination';
import {TextInput, Button, Select, SearchIcon} from 'evergreen-ui';


export default function UserData(props) {
    const [data, setData] = useState([]);
    const [totalRecords, setTotalRecords] = useState();
    const [activePage, setActivePage] = useState(1);
    const [realData, setRealData] = useState([]);
    const [search, setSearch] = useState({
        userName: ''
    });
     const [genderFilter, setGenderFilter] = useState({
        Gender: ''
    });
    const [cardFilter, setCardFilter] = useState({
        PaymentMethod: ''
    });

    // ========== FOR SEARCH BY USERNAME =========

    const {userName} = search;
    const onChangeHandler = e => {
        setSearch({...search, [e.target.name]: e.target.value});
    };

    const userNameHandle = e => {
        e.preventDefault();
        function isUser(user) {
            return user.UserName === search.userName;
        }
    
            const newSearchData = data.filter(isUser);
            setRealData(newSearchData);
            console.log("tetx", realData)
    
    };

    // ========== FOR SEARCH BY Gender =========

    const {Gender} = genderFilter;
    const onChangeGenderFilterHandler = e => {
        setGenderFilter({...genderFilter, [e.target.name]: e.target.value});
        function isUser(user) {
            return user.Gender === e.target.value;
        }
        const newSearchData = data.filter(isUser);
        setRealData(newSearchData);
    };


     // ========== FOR SEARCH BY PaymentMethod =========

     const {PaymentMethod} = genderFilter;
     const  onChangePaymentMethodFilterHandler = e => {
         setCardFilter({...cardFilter, [e.target.name]: e.target.value});
         function isUser(user) {
             return user.PaymentMethod === e.target.value;
         }
         const newSearchData = data.filter(isUser);
         setRealData(newSearchData);
     };
  
 // ========== GET ALL USERS =========
    const allUsersHandle = e => {
        e.preventDefault();
        setRealData(data);
    };

    console.log(realData);

    // =========== LOGIC FOR DISPLAYIN THE DATA IN PAGINATION =============

    const dataPerPage = 20;
    const indexOfLastData = activePage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = realData.slice(indexOfFirstData, indexOfLastData);

    //======== FUNCTION TO CHANGE PAGE =============

    const handlePageChange = pageNumber => {
        console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);
    };

    //======== API URL =============

    let url = 'https://api.enye.tech/v1/challenge/records';

    // ========== GET API CALL FOR USER DATA =======

    const loadUserData = () => {
        axios
            .get(`${url}`)
            .then(res => {
                setData(res.data.records.profiles);
                setRealData(res.data.records.profiles);
                setTotalRecords(res.data.size);
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        loadUserData();
    }, []);

    return (
        <div>
            <div className="mt-5 mb-2 container text-center">
                <div className="row">
                    <div className="col-md-12 col-lg-6 col-12 mb-3">
                        <TextInput
                            name="userName"
                            value={userName}
                            onChange={e => onChangeHandler(e)}
                            placeholder="Search by username....."
                            width="60%"
                        />
                        <Button
                            appearance="primary"
                            intent="success"
                            marginLeft="1%"
                            type="submit"
                            iconBefore={SearchIcon}
                            onClick={(e) => userNameHandle(e)}>
                        </Button>
                        <Button
                            appearance="primary"
                            intent="success"
                            marginLeft="1%"
                            type="submit"
                            onClick={allUsersHandle}>
                            all
                        </Button>
                    </div>
                    <div className="col-md-12 col-lg-6 col-12">
                        <Select width="40%" name="Gender" value={Gender} onChange={e => onChangeGenderFilterHandler(e)}>
                            <option hidden selected>
                                Filter by gender
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer to skip">Prefer to skip</option>
                        </Select>

                        <Select width="40%" marginLeft="1%" name="Gender" value={PaymentMethod} onChange={e => onChangePaymentMethodFilterHandler(e)}>
                            <option hidden selected>
                            Filter by PaymentMethod
                            </option>
                            <option value="cc">cc</option>check
                            <option value="check">Check</option>
                            <option value="money order">Money order</option>
                            <option value="paypal">Paypal</option>
                           
                        </Select>
                    </div>
                </div>
            </div>

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
