import {useState} from 'react';
import {Pane, Avatar, Button, Dialog} from 'evergreen-ui';

export default function UserCard(props) {
    const [showDialog, setShowDialog] = useState({
        action: false,
        data: {}
    });

    return (
        <div className="container mt-5">
            {props.currentData.length < 1 ? (
                <div className="text-center mt-5">
                    <p>
                        <b>No Recored Found</b>
                    </p>
                </div>
            ) : (
                <div className="row">
                    {props.currentData.map((data, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm mb-3 text-center">
                            <Pane border background="#F1FBFC">
                                <div className="row">
                                    <div className="col-2">
                                        <Avatar
                                            hashValue="id_249"
                                            name={`${data.FirstName}  ${data.LastName}`}
                                            size={40}
                                            marginTop={20}
                                            marginBottom={20}
                                            marginLeft={15}
                                            marginRight={20}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <p style={styles.name}>{`${data.FirstName}  ${data.LastName}`}</p>
                                    </div>
                                    <div className="col-3">
                                        <Button
                                            onClick={() => setShowDialog({action: true, data: data})}
                                            marginRight={10}
                                            marginY={25}
                                            appearance="primary"
                                            intent="success">
                                            view
                                        </Button>
                                    </div>
                                </div>
                            </Pane>
                        </div>
                    ))}

                    {/* ===== DIALOG FOR FULL DETAILS */}
                    <Pane>
                        <Dialog
                            isShown={showDialog.action}
                            title="User Detail"
                            onCloseComplete={() => setShowDialog({action: false, data: showDialog.data})}
                            hasFooter={false}>
                            <div>
                                <span style={{fontSize: '0.6em', fontWeight: 'bold'}}>Frist Name:</span>
                                <span className="ml-2" style={{fontSize: '0.6em', fontWeight: 'bold', opacity: '0.7'}}>
                                    {showDialog.data.FirstName}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.6em', fontWeight: 'bold'}}>Last Name:</span>
                                <span className="ml-2" style={{fontSize: '0.6em', fontWeight: 'bold', opacity: '0.7'}}>
                                    {showDialog.data.LastName}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.6em', fontWeight: 'bold'}}>User Name:</span>
                                <span className="ml-2" style={{fontSize: '0.6em', fontWeight: 'bold', opacity: '0.7'}}>
                                    {showDialog.data.UserName}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.6em', fontWeight: 'bold'}}>Gender:</span>
                                <span className="ml-2" style={{fontSize: '0.6em', fontWeight: 'bold', opacity: '0.7'}}>
                                    {showDialog.data.Gender}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.6em', fontWeight: 'bold'}}>Latitude:</span>
                                <span className="ml-2" style={{fontSize: '0.6em', fontWeight: 'bold', opacity: '0.7'}}>
                                    {showDialog.data.Latitude}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.6em', fontWeight: 'bold'}}>Longitude:</span>
                                <span className="ml-2" style={{fontSize: '0.6em', fontWeight: 'bold', opacity: '0.7'}}>
                                    {showDialog.data.Longitude}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.6em', fontWeight: 'bold'}}>Credit Card Number:</span>
                                <span className="ml-2" style={{fontSize: '0.6em', fontWeight: 'bold', opacity: '0.7'}}>
                                    {showDialog.data.CreditCardNumber}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.6em', fontWeight: 'bold'}}>Payment Method:</span>
                                <span className="ml-2" style={{fontSize: '0.6em', fontWeight: 'bold', opacity: '0.7'}}>
                                    {showDialog.data.PaymentMethod}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.6em', fontWeight: 'bold'}}>Credit Card Type:</span>
                                <span className="ml-2" style={{fontSize: '0.6em', fontWeight: 'bold', opacity: '0.7'}}>
                                    {showDialog.data.CreditCardType}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.6em', fontWeight: 'bold'}}>Email:</span>
                                <span className="ml-2" style={{fontSize: '0.6em', fontWeight: 'bold', opacity: '0.7'}}>
                                    {showDialog.data.Email}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.6em', fontWeight: 'bold'}}>Domain Name:</span>
                                <span className="ml-2" style={{fontSize: '0.6em', fontWeight: 'bold', opacity: '0.7'}}>
                                    {showDialog.data.DomainName}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.6em', fontWeight: 'bold'}}>Phone Number:</span>
                                <span className="ml-2" style={{fontSize: '0.6em', fontWeight: 'bold', opacity: '0.7'}}>
                                    {showDialog.data.PhoneNumber}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.6em', fontWeight: 'bold'}}>Mac Address:</span>
                                <span className="ml-2" style={{fontSize: '0.6em', fontWeight: 'bold', opacity: '0.7'}}>
                                    {showDialog.data.MacAddress}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.6em', fontWeight: 'bold'}}>URL:</span>
                                <span className="ml-2" style={{fontSize: '0.6em', fontWeight: 'bold', opacity: '0.7'}}>
                                    {showDialog.data.URL}
                                </span>
                            </div>
                            <hr />
                            <div>
                                <span style={{fontSize: '0.6em', fontWeight: 'bold'}}>LastLogin:</span>
                                <span className="ml-2" style={{fontSize: '0.6em', fontWeight: 'bold', opacity: '0.7'}}>
                                    {showDialog.data.LastLogin}
                                </span>
                            </div>
                        </Dialog>
                    </Pane>
                </div>
            )}
        </div>
    );
}

// =========== STYLE ============
const styles = {
    name: {
        width: '180px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        marginTop: '30px',
        fontSize: '0.7em',
        fontWeight: 'bold'
    }
};
