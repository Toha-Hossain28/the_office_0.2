import React, {useEffect,useState} from "react";
import { ListBackends,getBackEndById,deleteBackEnd } from "../services/BackEndService";
import { useNavigate } from "react-router-dom";

const ListBackendComponent =() =>{

    const [backends,setBackEnds]=useState([]);
    const navigator=useNavigate();
    useEffect(()=>{
        getAllBackEnd();
    },[]);


    function getAllBackEnd(){
        ListBackends().then((response)=>{
            setBackEnds(response.data);
        }).catch((error)=>{
            console.error(error);
        });
    }
    function addNewBackEnd(){
        navigator('/backend/add');
    }
    function handleUpdate(id){
        navigator((`/backend/update/${id}`));
    }
    function handleDelete(id) {
        deleteBackEnd(id).then(() => {
            getAllBackEnd();
        }).catch((error) => {
            console.error(error);
        });
    }


    return (
        <div className="container">
            <br /> <br />
            <h1 className="text-center mb-4">BackEnd List</h1>
            <button className="btn btn-primary mb-4" onClick={addNewBackEnd}>Add BackEnd</button>
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
                        {backends.map(backend => (
                            <tr key={backend.id}>
                                <td>{backend.id}</td>
                                <td>{backend.firstName}</td>
                                <td>{backend.lastName}</td>
                                <td>{backend.email}</td>
                                <td>{backend.phone}</td>
                                <td>{backend.salary}</td>
                                <td>{backend.department}</td>
                                <td>{backend.employeeType}</td>
                                <td>{backend.mainSkill}</td>
                                <td>
                                    <button className="btn btn-sm btn-info" onClick={() => handleUpdate(backend.id)}>Update</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(backend.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default ListBackendComponent