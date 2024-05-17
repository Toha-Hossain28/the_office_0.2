import React,{useEffect,useState} from "react";
import { ListFrontEnds,getFrontEndById,deleteFrontEnd } from "../services/FrontEndService";
import { useNavigate } from "react-router-dom";
import { ListFullStack, deleteFullStack } from "../services/FullStackService";


const ListFullStackComponent = () => {

    const [fullstacks, setFullStacks] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllFullStack();
    }, []);

    function getAllFullStack() {
        ListFullStack().then((response) => {
            setFullStacks(response.data);
        }).catch((error) => {
            console.error(error);
        }
        );
    }

    function addNewFullStack() {
        navigator('/fullstack/add');
    }


    function handleUpdate(id) {
        navigator(`/fullstack/update/${id}`);
    }

    function handleDelete(id) {
        deleteFullStack(id).then(() => {
            getAllFullStack();
        }).catch((error) => {
            console.error(error);
        });

    }
    
    return (
        <div className="container">
            <br /> <br />
            <h1 className="text-center mb-4">FullStack List</h1>
            <button className="btn btn-primary mb-4" onClick={addNewFullStack}>Add FullStack</button>
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
                        {fullstacks.map(fullstack => (
                            <tr key={fullstack.id}>
                                <td>{fullstack.id}</td>
                                <td>{fullstack.firstName}</td>
                                <td>{fullstack.lastName}</td>
                                <td>{fullstack.email}</td>
                                <td>{fullstack.phone}</td>
                                <td>{fullstack.salary}</td>
                                <td>{fullstack.department}</td>
                                <td>{fullstack.employeeType}</td>
                                <td>{fullstack.mainSkill}</td>
                                <td>
                                    <button className="btn btn-sm btn-info" onClick={() => handleUpdate(fullstack.id)}>Update</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(fullstack.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListFullStackComponent