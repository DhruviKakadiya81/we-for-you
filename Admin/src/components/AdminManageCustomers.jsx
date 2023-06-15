import React from 'react'
import { AdminNavbar } from './AdminNavbar'
import { useState } from 'react'
import { useEffect } from 'react'
import managecust from '../services/managecustomer';
const AdminManageCustomers = () => {
    const [data, setdata] = useState([]);
    const [IsEdit, setIsEdit] = useState(true)
    let counter = 1;
    const handledata = async () => {
        console.log("data==>");
        const response = await managecust.getdata();
        console.log("user data => ", response.data);
        setdata(response.data.data);
    }

    useEffect(() => {
        IsEdit && handledata();

    }, [IsEdit]);

    return (
        <>
            <AdminNavbar>


                {data != undefined && data.length > 0 && (
                    <div className="tablemain pagination" id='abc'>
                        <table id="dtBasicExample" className="table table-striped table-sm" cellSpacing="1" width="100%" >
                            <thead>
                                <tr>
                                    <th>Index</th>
                                    <th>Image</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>gender</th>
                                    <th>Birthdate</th>
                                </tr>

                            </thead>
                            <tbody>

                                {data.map(city => (

                                    <tr key={city._id}>
                                        <td>{counter++}</td>
                                        <td>
                                            <img src={city.image ? 'http://localhost:4000/image/' + city.image : "images/AVTAR.jpg"} alt="not" style={{ "width": "100px", "height": "100px" }} />
                                        </td>
                                        <td>{city.firstname}</td>
                                        <td>{city.lastname}</td>
                                        <td>{city.gender}</td>
                                        <td>{city.birthdate.slice(0, 10)}</td>
                                        <td>
                                            {/* <Delete id={city._id} handleIsEdit={() => setisEdit(!isEdit)} /> */}

                                        </td>
                                        <td>
                                            {/* <Update cityname={city.cityname} id={city._id} handleIsEdit={() => setisEdit(!isEdit)} /> */}
                                        </td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>
                )}




            </AdminNavbar>
        </>

    )
}

export default AdminManageCustomers
