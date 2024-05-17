import React, { useEffect, useState } from "react";
import { ListJuniors,getJuniorById,deleteJunior } from "../services/JuniorService";
import { useNavigate } from "react-router-dom";
const ListJuniorComponent = () => {

    const [juniors, setJuniors] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllJunior();
    }, []);

    function getAllJunior() {
        ListJuniors().then((response) => {
            setJuniors(response.data);
        }).catch((error) => {
            console.error(error);
        }
        );
    }

    function addNewJunior() {
        navigator('/junior/add');
    }


    function handleUpdate(id) {
        navigator(`/junior/update/${id}`);
    }

    function handleDelete(id) {
        deleteJunior(id).then(() => {
            getAllJunior();
        }).catch((error) => {
            console.error(error);
        });

    }
    

    return (
        <div className="container">
            <br /> <br />
            <h1 className="text-center mb-4">Junior List</h1>
            <button className="btn btn-primary mb-4" onClick={addNewJunior}>Add Junior Developer</button>
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
                        {juniors.map(junior => (
                            <tr key={junior.id}>
                                <td>{junior.id}</td>
                                <td>{junior.firstName}</td>
                                <td>{junior.lastName}</td>
                                <td>{junior.email}</td>
                                <td>{junior.phone}</td>
                                <td>{junior.salary}</td>
                                <td>{junior.department}</td>
                                <td>{junior.employeeType}</td>
                                <td>{junior.mainSkill}</td>
                                <td>
                                    <button className="btn btn-sm btn-info" onClick={() => handleUpdate(junior.id)}>Update</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(junior.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListJuniorComponent