import React, { useEffect, useState } from "react";
import { ListEmployees, getEmployeeById, deleteEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployee();
    }, []);

    function getAllEmployee() {
        ListEmployees().then((response) => {
            setEmployees(response.data);
        }).catch((error) => {
            console.error(error);
        }
        );
    }

    function addNewEmployee() {
        navigator('/employee/add');
    }


    function handleUpdate(id) {
        navigator(`/employee/update/${id}`);
    }

    function handleDelete(id) {
        deleteEmployee(id).then(() => {
            getAllEmployee();
        }).catch((error) => {
            console.error(error);
        });

    }
    

    return (
        <div className="container">
            <br /> <br />
            <h1 className="text-center mb-4">Employee List</h1>
            <button className="btn btn-primary mb-4" onClick={addNewEmployee}>Add Employee</button>
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
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.department}</td>
                                <td>{employee.employeeType}</td>
                                <td>{employee.mainSkill}</td>
                                <td>
                                    <button className="btn btn-sm btn-info" onClick={() => handleUpdate(employee.id)}>Update</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(employee.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListEmployeeComponent
