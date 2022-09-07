import logo from "./../../images/logo.png"
import "./navbar.css"
import {useState} from "react";
function NavBar()
{   const [onHover1,setonHover1]=useState(true);
   const [onHover2,setonHover2]=useState(true);
   const [onHover3,setonHover3]=useState(true);
    return (
        <>
            <div  className="nav-container">
                <div className="left-logo">
                    <img src={logo}></img>
                </div>
                <div className="middle">
                    <ul>
                        <li><a>Pricing</a></li>
                        <li><a>Products</a></li>
                        <li className="x"
                        onMouseLeave={() => setonHover1(true)}><a onMouseEnter={() => setonHover1(false)}>Integrations</a>
                        <div className={onHover1?"integration-dropdow":"integration-dropdow active "}>
                            <li><a>Team Messaging</a></li>
                            <li><a>Video Conferencing</a></li>
                            <li><a>Calender</a></li>
                            <li><a>Dialer</a></li>
                            <li><a>CRM</a></li>
                            
                        </div>
                        </li>

                        <li className="x"
                        onMouseLeave={() => setonHover2(true)}> <a onMouseEnter={() => setonHover2(false)}>Solutions</a>
                        <div className={onHover2?"solution-dropdown":"solution-dropdown active"}>
                           
                            <li><a>For Account Exces</a></li>
                            <li><a>Sales Onboarding</a></li>
                            <li><a>For Sales Managers</a></li>
                            <li><a>Sales Training</a></li>
                            <li><a>For Sales Leader</a></li>
                            <li><a>Process Monitoring</a></li>
                            <li><a>Market Intelligence</a></li>
                            <li><a>Sales Strategy</a></li>
                            <li><a>People Intelligence</a></li>
                            <li><a>Meeting Intelligence</a></li>
                            <li><a>Sales Enablement</a></li>
                            <li><a>Quality Managment</a></li>
                        
                            {/* <div className="dropdown-right integration-dropdow">
                            
                            </div> */}
                        </div>
                        </li>
                        <li className="x"
                        onMouseLeave={() => setonHover3(true)}
                        ><a onMouseEnter={() => setonHover3(false)}>Resources</a>
                        <div className={onHover3?"resources-dropdown":"resources-dropdown active"}>
                            <li><a>Team Messaging</a></li>
                            <li><a>Video Conferencing</a></li>
                            <li><a>Calender</a></li>
                            <li><a>Dialer</a></li>
                            <li><a>CRM</a></li>
                        </div>
                        </li>
                        <li><a>About Us</a></li>
                    </ul>
                </div>
                <div className="right-button">
                    <button>Book a Demo</button>
                    <button className="button">Sign Up</button>
                </div>
            </div>
        </>
    )
};

export default NavBar;