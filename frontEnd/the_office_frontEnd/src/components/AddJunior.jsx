import React, { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { createJunior,getJuniorById,deleteJunior, updateJunior } from "../services/JuniorService";


const JuniorComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [salary, setSalary] = useState("");
    const [department, setDepartment] = useState("");
    const [employeeType, setEmployeeType] = useState("");
    const [mainSkill, setMainSkill] = useState("");

    const navigator = useNavigate();
    const { id } = useParams();

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        salary: '',
        department: '',
        employeeType: '',
        mainSkill: ''
    })

    useEffect(() => {
        if(id) {
            getJuniorById(id).then((response) => {
                const junior = response.data;
                setFirstName(junior.firstName);
                setLastName(junior.lastName);
                setEmail(junior.email);
                setPhone(junior.phone);
                setSalary(junior.salary);
                setDepartment(junior.department);
                setEmployeeType(junior.employeeType);
                setMainSkill(junior.mainSkill);
            }).catch((error) => {
                console.error(error);
            });
        }
    }, [id]);

    function saveOrUpdateJunior(event) {
        event.preventDefault();

        if (validateForm()) {
            const junior = {
                firstName,
                lastName,
                email,
                phone,
                salary,
                department,
                employeeType,
                mainSkill
            };
    
            if (id) {
                updateJunior(id, junior).then((response) => {
                    console.log(response.data);
                    navigator('/junior');
                }
                ).catch((error) => {
                    console.error(error);
                }
                );
                
            } else {

                createJunior(junior).then((response) => {
                    console.log(response.data);
                    navigator('/junior');
                }).catch((error) => {
                    console.error(error);
                });
            }
            
        }  
    }

    function validateForm() {
        let valid = true;

        const errorsCopy = {... errors};

        if(firstName.trim()){
            errorsCopy.firstName = "";
        } else {
            errorsCopy.firstName = "First name is required";
            valid = false;
        }

        if(lastName.trim()){
            errorsCopy.lastName = "";
        } else {
            errorsCopy.lastName = "Last name is required";
            valid = false;
        }

        if(email.trim()){
            errorsCopy.email = "";
        } else {
            errorsCopy.email = "Email is required";
            valid = false;
        }

        if (phone.trim()) {
            errorsCopy.phone = "";
        } else {
            errorsCopy.phone = "Phone is required";
            valid = false;
        }

        if (salary) {
            errorsCopy.salary = "";
        } else {
            errorsCopy.salary = "salary is required";
            valid = false;
        }

        if (department.trim()) {
            errorsCopy.department = "";
        } else {
            errorsCopy.department = "Department is required";
            valid = false;
        }

        if (employeeType.trim()) {
            errorsCopy.employeeType = "";
        } else {
            errorsCopy.employeeType = "Employee Type is required";
            valid = false;
        }

        if (mainSkill.trim()) {
            errorsCopy.mainSkill = "";
        } else {
            errorsCopy.mainSkill = "MainSkill is required";
            valid = false;
        }
        setErrors(errorsCopy);
        return valid;
    }

    function pageTitle() {
        if(id) {
            return <h2 className="text-center mb-4">Update Junior</h2>;
        } else {
            return <h2 className="text-center mb-4">Add Junior</h2>;
        }
    }

    return (
        <div className="container">
            <br /><br />
            <div className="row">
                <div className="card col-md-8 offset-md-2">
                    <br />
                    {
                        pageTitle()
                    }
                    <div className="card-body">
                    <form>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input
                                    type="text"
                                    className={`form-control ${ errors.firstName ? 'is-invalid':'' }`}
                                    id="firstName"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    { errors.firstName && <div className='invalid-feedback'> { errors.firstName }</div>}
                            </div>
                            <div className="col">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    className={`form-control ${ errors.lastName ? 'is-invalid':'' }`}
                                    id="lastName"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    />
                                    { errors.lastName && <div className='invalid-feedback'> { errors.lastName }</div>}
                            </div>
                        </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className={`form-control ${ errors.email ? 'is-invalid':'' }`}
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                                />
                                { errors.email && <div className='invalid-feedback'> { errors.email }</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input
                            type="tel"
                            className={`form-control ${ errors.phone ? 'is-invalid':'' }`}
                            id="phone"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                                />
                                { errors.phone && <div className='invalid-feedback'> { errors.phone }</div>}
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="salary" className="form-label">Salary</label>
                            <input
                                type="text"
                                className={`form-control ${ errors.salary ? 'is-invalid':'' }`}
                                id="salary"
                                placeholder="Salary"
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                                    />
                                    { errors.salary && <div className='invalid-feedback'> { errors.salary }</div>}
                        </div>
                        <div className="col">
                            <label htmlFor="department" className="form-label">Department</label>
                            <input
                                type="text"
                                className={`form-control ${ errors.department ? 'is-invalid':'' }`}
                                id="department"
                                placeholder="Department"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                                    />
                                    { errors.department && <div className='invalid-feedback'> { errors.department }</div>}
                        </div>
                    </div>

                            <div className="row mb-3">
                                <div className="col">
                                <label htmlFor="employeeType" className="form-label">Employee Type</label>
                                    <input
                                    type="text"
                                    className={`form-control ${ errors.employeeType ? 'is-invalid':'' }`}
                                    id="employeeType"
                                    placeholder="Employee Type"
                                    value={employeeType}
                                    onChange={(e) => setEmployeeType(e.target.value)}
                                    />
                                    { errors.employeeType && <div className='invalid-feedback'> { errors.employeeType }</div>}
                                </div>
                                <div className="col">
                                <label htmlFor="mainSkill" className="form-label">Main Skill</label>
                                    <input
                                    type="text"
                                    className={`form-control ${ errors.mainSkill ? 'is-invalid':'' }`}
                                    id="mainSkill"
                                    placeholder="Main Skill"
                                    value={mainSkill}
                                    onChange={(e) => setMainSkill(e.target.value)}
                                    />
                                    { errors.mainSkill && <div className='invalid-feedback'> { errors.mainSkill }</div>}
                                </div>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-success" onClick={saveOrUpdateJunior}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default JuniorComponent;