import "../Reviewsection/Reviewsection.css";
import reviewCardimg1 from "../../images/reviewcardimg1.png"
import reviewCardimg2 from "../../images/reviewcardimg2.png"
import reviewCardimg3 from "../../images/reviewcardimg3.png"
import reviewCardimg4 from "../../images/reviewcardimg4.png"
import reviewCardimg5 from "../../images/reviewcardimg5.png"
import Colon from "../../images/colon.png";
import Carousel from "react-elastic-carousel";

function Reviewsection()
{   
   const breakPoints = 
   [
        {width:0,itemsToshow : 0}
   ];
    
    
    return (
   
            <div className="review-container" >
                
            <Carousel className="" style={{width:"63rem", margin:"auto", marginBottom:"2rem"}} breakPoints={breakPoints} >
           
                <div className="review-card">
                    <div className="review-left">
                        <img src={reviewCardimg1} alt=""></img>
                    </div>

                    <div className="review-right">
                    <img src={Colon}  alt=""></img>
                    <h6>Convin is a sales managers' Swiss army knife</h6>
                        <p>
                        Convin is a sales managers' Swiss army knife for coaching and call tracking. Having a library of key topics and next steps mentioned by each rep on each call helps streamline coaching moments and 1-1s, this keeps me from bouncing back and forth to programs and gives me more time to coach and help my team perform.
                        </p>
                        <p className="emp-name">Aaron Drummond</p>
                        <p>Account Executive - Place Technology</p>
                    </div>
                </div>  
                

                <div className="review-card">
                    <div className="review-left">
                        <img src={reviewCardimg2}  alt=""></img>
                    </div>

                    <div className="review-right">
                    <img src={Colon}  alt=""></img>
                    <h6>Helps us managers to be more thoughtful and structured</h6>
                        <p>
                        Convin helps our sales teams focus and be present in the moment of conversation because they're confident they can easily go back and review calls at a later time. It helps us as managers to be more thoughtful and structured about the way we coach and help reps progress their deals forward.
                        </p>
                        <p className="emp-name">Alex Siegler</p>
                        <p>Head of Strategic Alliances - Place Technology</p>
                    </div>
                </div>  
                <div className="review-card">
                    <div className="review-left">
                        <img src={reviewCardimg3}  alt=""></img>
                    </div>

                    <div className="review-right">
                    <img src={Colon}  alt=""></img>
                    <h6>Able to quickly identify areas of improvement for my reps</h6>
                        <p>
                        I have been able to quickly identify areas of improvement for my reps & able to provide coaching to allow reps to quickly pivot. Also help them make changes to their pitch.
                        </p>
                        <p className="emp-name">Aquibur Rahman</p>
                        <p>CEO & Founder - Mailmodo</p>
                    </div>
                </div>  
                <div className="review-card">
                    <div className="review-left">
                        <img src={reviewCardimg4}  alt=""></img>
                    </div>

                    <div className="review-right">
                    <img src={Colon}  alt=""></img>
                    <h6>Reviewing the recordings is like an athlete watching game-tape</h6>
                        <p>
                        Reviewing the recordings is like an athlete watching game-tape to try to improve. Collaboration with management is easy, and my reps are learning so much faster by watching the best.
                        </p>
                        <p className="emp-name">Rishabh Goel</p>
                        <p>CEO & Founder - Credgenics</p>
                    </div>
                </div>  
                <div className="review-card">
                    <div className="review-left">
                        <img src={reviewCardimg5}  alt=""></img>
                    </div>

                    <div className="review-right">
                    <img src={Colon}  alt=""></img>
                    <h6>Convin makes reviewing sales calls super easy</h6>
                        <p>
                        Convin makes reviewing sales calls super easy. It creates training libraries for new joinees to improve and I love that. It also sends instant emails to those getting reviewed for the specific recording.

                        </p>
                        <p className="emp-name">Mahak Garg</p>
                        <p>CEO & COO - Udayy</p>
                    </div>
                </div>  
             

                 
                 
               
                </Carousel>
               
            </div>
           
           
        
    )
};

export default Reviewsection;