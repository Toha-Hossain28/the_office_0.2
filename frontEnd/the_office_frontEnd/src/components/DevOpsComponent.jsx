import React, { useEffect, useState } from "react";
import { ListDevOps,getDevOpsById,deleteDevOps } from "../services/DevOpsService";
import { useNavigate } from "react-router-dom";

const ListDevOpsComponent = () => {

    const [devopsS, setdevopsS] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllDevOps();
    }, []);

    function getAllDevOps() {
        ListDevOps().then((response) => {
            setdevopsS(response.data);
        }).catch((error) => {
            console.error(error);
        }
        );
    }

    function addNewDevOps() {
        navigator('/devops/add');
    }


    function handleUpdate(id) {
        navigator(`/devops/update/${id}`);
    }

    function handleDelete(id) {
        deleteDevOps(id).then(() => {
            getAllDevOps();
        }).catch((error) => {
            console.error(error);
        });

    }
    

    return (
        <div className="container">
            <br /> <br />
            <h1 className="text-center mb-4">DevOps List</h1>
            <button className="btn btn-primary mb-4" onClick={addNewDevOps}>Add DevOps</button>
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
                        {devopsS.map(devops => (
                            <tr key={devops.id}>
                                <td>{devops.id}</td>
                                <td>{devops.firstName}</td>
                                <td>{devops.lastName}</td>
                                <td>{devops.email}</td>
                                <td>{devops.phone}</td>
                                <td>{devops.salary}</td>
                                <td>{devops.department}</td>
                                <td>{devops.employeeType}</td>
                                <td>{devops.mainSkill}</td>
                                <td>
                                    <button className="btn btn-sm btn-info" onClick={() => handleUpdate(devops.id)}>Update</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(devops.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListDevOpsComponent