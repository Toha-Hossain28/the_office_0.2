import React, { useEffect, useState } from "react";
import { ListFrontEnds,getFrontEndById,deleteFrontEnd } from "../services/FrontEndService";
import { useNavigate } from "react-router-dom";

const ListFrontEndComponent = () => {

    const [frontends, setFrontEnds] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllFrontEnd();
    }, []);

    function getAllFrontEnd() {
        ListFrontEnds().then((response) => {
            setFrontEnds(response.data);
        }).catch((error) => {
            console.error(error);
        }
        );
    }
    function addNewFrontEnd() {
        navigator('/frontend/add');
    }


    function handleUpdate(id) {
        navigator(`/frontend/update/${id}`);
    }

    function handleDelete(id) {
        deleteFrontEnd(id).then(() => {
            getAllFrontEnd();
        }).catch((error) => {
            console.error(error);
        });

    }

    return (
        <div className="container">
            <br /> <br />
            <h1 className="text-center mb-4">FrontEnd List</h1>
            <button className="btn btn-primary mb-4" onClick={addNewFrontEnd}>Add FrontEnd</button>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Department</th>
                            <th scope="col">Employee Type</th>
                            <th scope="col">Main Skill</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {frontends.map(frontend => (
                            <tr key={frontend.id}>
                                <td>{frontend.id}</td>
                                <td>{frontend.firstName}</td>
                                <td>{frontend.lastName}</td>
                                <td>{frontend.email}</td>
                                <td>{frontend.phone}</td>
                                <td>{frontend.salary}</td>
                                <td>{frontend.department}</td>
                                <td>{frontend.employeeType}</td>
                                <td>{frontend.mainSkill}</td>
                                <td>
                                    <button className="btn btn-sm btn-info" onClick={() => handleUpdate(frontend.id)}>Update</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(frontend.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListFrontEndComponent
