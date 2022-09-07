import "../Footer/Footer.css"
import footerLogo from "../../images/logo.png" 
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer()
{
    return(
        <div className="footer-container">
            <div className="up">
                <div>
                    <div className="footer-logo"><img src={footerLogo}></img></div>
                    <h4>US</h4>
                        <div className="location">
                        <LocationOnIcon/>
                        <p>2093 PHILADELPHIA PIKE #5025
                        <br/>CLAYMONT, DELAWARE 19703</p>
                        </div>
                    
                      <div className="location">
                      <PhoneIcon/>
                      <p>(+1) 6282095776</p>
                      </div>  
                    
                    <h4>INDIA</h4>
                    <div className="location">
                    <LocationOnIcon/>
                    <p>
                    BHIVE WORKSPACE NO.112,AKR
                    <br/>TECHPARK, A-BLOCK, 7TH MILE
                    <br/>HOSUR ROAD, KRISHNA REDDY,
                    <br/>INDUSTRIAL AREA,
                    <br/>BENGALURU-560068
                    </p>
                    </div>
                    
                    <div className="location">
                    <PhoneIcon/>
                    <p>+91 7011464590, +91 8802881329</p>
                    </div>
                    
                    <h4>Follow us on</h4>
                    <div className="social-icon">
                        <FacebookIcon style={{fontSize:"2.5rem"}}/>
                        <TwitterIcon style={{fontSize:"2.5rem"}}/>
                        <LinkedInIcon style={{fontSize:"2.5rem"}}/>
                        <InstagramIcon style={{fontSize:"2.5rem"}}/>
                    </div>
                </div>

                <div>
                    <h4>Products</h4>
                    <p>Contact center software</p>
                    <p>Speech Analytics software</p>
                    <p>Call center monitoring software</p>
                    <p>Conversation intelligence</p>
                    <p>Sales tracking software</p>
                    <p>Sales call analytics software</p>
                    <p>Conversation analytics</p>
                    <p>Automated quality management</p>
                    <p>Call center recording solution</p>
                </div>

                <div>
                    <h4>Company</h4>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Sales Gamebit</p>
                    <p>Press</p>
                    <p>Success Stories</p>
                    <p>Blogs</p>
                    <p>e-book</p>
                    <p>Pricing</p>
                </div>

                <div>
                    <h4>Solutions</h4>
                    <p>For Account Execs</p>
                    <p>For Sales Managers</p>
                    <p>For Sales Leaders</p>
                    <p>Market Intelligence</p>
                    <p>People Intelligence</p>
                    <p>Sales Enablement</p>
                    <p>Sales Onboarding</p>
                    <p>Sales Training</p>
                    <p>Process Monitoring</p>
                    <p>Sales Strategy</p>
                    <p>Meeting Intelligence</p>
                    <p>Quality Management</p>
                </div>
            </div>

            <div className="down">
                
            </div>

        </div>
    )
};
export default Footer;