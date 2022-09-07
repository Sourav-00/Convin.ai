import "../Animatedsection/Animatedsection.css"
import Animationimg1 from "../../images/animationimg1.png"
import Animationimg2 from "../../images/animationimg2.png"
import Animationimg3 from "../../images/animationimg3.png"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Animatedsection()
{   
    useEffect(()=>{
        Aos.init({duration:1500});
        },[]);

    return(
        <>
            <div className="animated-container">
            <div className="background1"></div>
                <h2 className="title">Different roles. Different problems.
                         <br/>One solution.</h2>

                        <div className="animated-subsection">
                            <div data-aos="fade-right" className="img-div">
                                <img src={Animationimg1}></img>
                            </div>
                            <div data-aos="fade-left" className="right">
                           <h2>For Leaders</h2> 
                           <p> Increase Customer Lifetime Value by accelerating QA, scaling automated coaching, and optimize for business drivers. Simultaneously, reduce employee churn by investing in agent performance and development. 
                           </p>
                            </div>
                        </div>

                        <div className="animated-subsection">
                            <div data-aos="fade-right" className="left">
                                <h2>For Managers</h2>
                                <p>
                                    Proactively address contact center productivity
                                    challenges by emphasizing on agents and processes
                                    through call insights, compliance monitoring, and
                                    automated agent coaching. 
                                </p>
                            </div>
                            <div data-aos="fade-left" className="img-div">
                                <img src={Animationimg2}></img>
                            </div>
                        </div>

                        <div className="animated-subsection">
                            <div data-aos="fade-right" className="img-div">
                                <img src={Animationimg3}></img>
                            </div>
                            <div data-aos="fade-left" className="right">
                                <h2>For Agents</h2>
                                <p>
                                Empower agents to handle complex conversations by focusing on unbiased feedback, personalized coaching at scale, and actionable insights on a daily basis.
                                </p>
                            </div>
                        </div>
            </div>
        </>
    )
};
export default Animatedsection;