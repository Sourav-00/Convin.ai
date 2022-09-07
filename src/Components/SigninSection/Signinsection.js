import "../SigninSection/Signinsection.css"
import Background from "../../images/signin-background.png"
function SigninSection()
{
    return(
        <div style={{ backgroundImage: `url(${Background})` ,    backgroundSize: "cover"
        ,backgroundRepeat: "no-repeat"}} className="signin-container">
            <h1>Eliminate human dependency
            <br/>with Convin’s AI engine</h1>
            <h4>Go from Insight to Action</h4>
            <button>Sign Up</button>
        </div>
    )
};
export default SigninSection;