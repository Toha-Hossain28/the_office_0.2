import React, { useEffect, useState } from "react";
import { ListSeniors,deleteSenior,getSeniorById } from "../services/SeniorService";
import { useNavigate } from "react-router-dom";
const ListSeniorComponent = () => {

    const [seniors, setSeniors] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllSenior();
    }, []);

    function getAllSenior() {
        ListSeniors().then((response) => {
            setSeniors(response.data);
        }).catch((error) => {
            console.error(error);
        }
        );
    }

    function addNewSenior() {
        navigator('/senior/add');
    }


    function handleUpdate(id) {
        navigator(`/senior/update/${id}`);
    }

    function handleDelete(id) {
        deleteSenior(id).then(() => {
            getAllSenior();
        }).catch((error) => {
            console.error(error);
        });

    }
    

    return (
        <div className="container">
            <br /> <br />
            <h1 className="text-center mb-4">Junior List</h1>
            <button className="btn btn-primary mb-4" onClick={addNewSenior}>Add Senior Developer</button>
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
                        {seniors.map(senior => (
                            <tr key={senior.id}>
                                <td>{senior.id}</td>
                                <td>{senior.firstName}</td>
                                <td>{senior.lastName}</td>
                                <td>{senior.email}</td>
                                <td>{senior.phone}</td>
                                <td>{senior.salary}</td>
                                <td>{senior.department}</td>
                                <td>{senior.employeeType}</td>
                                <td>{senior.mainSkill}</td>
                                <td>
                                    <button className="btn btn-sm btn-info" onClick={() => handleUpdate(senior.id)}>Update</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(senior.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListSeniorComponent