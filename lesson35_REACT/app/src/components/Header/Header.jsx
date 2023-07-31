import React, {useState} from 'react';
import logo from '../../images/logo.svg';
import arrow from '../../images/icon-arrow-down.svg';

function Header() {
    // for click on burger and X buttons
    const [menuBtnClicked, setMenuClicked] = useState(false);
    const handleMenuClick = () => {
        setMenuClicked(true);
    };
    const handleXClicked = () => {
        setMenuClicked(false);
    };

    // for feature dropdown
    const [featureClicked, setFeatureClicked] = useState(false);
    const handleFeatureClick = () => {
        setFeatureClicked((prevFeature) => !prevFeature);
    };

    // for company dropdown
    const [companyClicked, setCompanyClicked] = useState(false);
    const handleCompanyClick = () => {
        setCompanyClicked((prevCompany) => !prevCompany);
    };

    return (
        <header>
            <img src={logo} alt="logo" />
            <button className="burger-menu" onClick={handleMenuClick}></button>

            <nav className="active-nav-menu" style={menuBtnClicked ? {display: "flex"} : {}}> 
                <button className="x-btn" onClick={handleXClicked}></button>
                <div className="nav-links">
                    <div className="feature-container">
                        <div className="dropdown-link" onClick={handleFeatureClick}>
                            <a href="#">Features</a>
                            <img 
                                src={arrow} 
                                alt="arrow-down" 
                                className="arrow-down" 
                                style={featureClicked ? {transform: 'rotate(180deg)'} : {}} 
                            />
                        </div>
                        <div className="feature-wrapper" style={featureClicked ? {display: 'flex'} : {}}>
                            <a href="#" className="icon-todo">Todo List</a>
                            <a href="#" className="icon-calendar">Calendar</a>
                            <a href="#" className="icon-reminders">Reminders</a>
                            <a href="#" className="icon-planning">Planning</a>
                        </div>
                    </div>
                    <div className="company-container">
                        <div className="dropdown-link" onClick={handleCompanyClick}>
                            <a href="#">Company</a>
                            <img 
                                src={arrow} 
                                alt="arrow-down" 
                                className="arrow-down" 
                                style={companyClicked ? {transform: 'rotate(180deg)'} : {}} 
                            />
                        </div>
                        <div className="company-wrapper" style={companyClicked ? {display: 'flex'} : {}}>
                            <a href="#">History</a>
                            <a href="#">Our Team</a>
                            <a href="#">Blog</a>
                        </div>
                    </div>
                    <a href="#">Careers</a>
                    <a href="#">About</a>
                </div>
                <div className="nav-buttons">
                    <button className="login">Login</button>
                    <button className="reg">Registration</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;