import React from "react";

const HeaderComponent = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <a href="https://www.linkedin.com/in/kevin-ramos-6a6b7b1a2/" className="navbar-brand">The Office</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#about">Senior</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">FrontEnd</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">BackEnd</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">DevOps</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Junior</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://localhost:3000/employee">Employee</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default HeaderComponent