import "../Rewardsection/Rewardsection.css"
import Badge1 from "../../images/badge1.svg"
// import Badge2 from "../../images/badge2.svg"
import Badge3 from "../../images/badge3.png"
import Badge4 from "../../images/badge4.png"
import Badge5 from "../../images/badge5.png"
import Badge6 from "../../images/badge6.png"
import Badge7 from "../../images/badge7.png"
import Badge8 from "../../images/badge8.png"
function Rewardsection()
{
    return(
        <div className="reward-container">
           <h2>Don't just take it from us.
</h2>
                <div className="badges">
                        <div><img src={Badge1}  alt=""></img></div>
                        <div><img src={Badge1} alt=""></img></div>
                        <div><img src={Badge3} alt=""></img></div>
                        <div><img src={Badge4} alt=""></img></div>
                        <div><img src={Badge5} alt=""></img></div>
                </div>
                <h2>Your safety is our priority!</h2>
                <div className="badges">
                        <div><img src={Badge6} alt=""></img></div>
                        <div><img src={Badge7} alt=""></img></div>
                        <div><img src={Badge8} alt=""></img></div>
                </div>
        </div>
    )
};
export default Rewardsection;