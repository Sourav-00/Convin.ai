import "./part2.css"
// import 'animate.css';
import CountUp from 'react-countup';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
function Part2(){
    useEffect(()=>{
        Aos.init({duration:3000,debounceDelay: 50});
    },[])
    const [counterOn,setCounterOn] = useState(false);
    return (
        <>
                        
                        <div className="Automation-engine">
                        
                                 <h1>Convin's Automation Engine</h1>
                                <div className="card-container ">
                                    <div data-aos="zoom-in-right" className="cards">
                                        <span>1</span>
                                        <div className="card-img">
                                            <img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62f49e9a364a0933a96b4857_Group%20(1).png" alt=""/>
                                        </div>
                                        <div className="card-content">
                                            <h2>Automated <br/>
                                                Call QA</h2>
                                            <p>Monitor and analyze 100% calls automatically based on a custom scorecard. </p>
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in" data-aos-duration="1000" className=" cards">
                                        <span>2</span>
                                        <div className="card-img">
                                            <img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62f49f82e4391f191ff36065_icon-chart-sky%202.png" alt=""/>
                                        </div>
                                        <div className="card-content">
                                            <h2>Win Behavior  <br/>
                                            Analysis</h2>
                                            <p>Identify actions and behaviors that drive positive and negative business outcomes.</p>
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in-left" className=" cards">
                                        <span>3</span>
                                        <div className="card-img">
                                            <img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62f49f8fb5f151c9b216f5e3_icon-coaching-intel-dark%201.png" alt=""/>
                                        </div>
                                        <div className="card-content">
                                            <h2>Automated Agent  <br/>
                                            Coaching</h2>
                                            <p>Automatically create and share personalized agent coaching at scale.</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            
                            
        
        


        {/*------------------- analysis section-------------------- */}


        
        <div className="analysis-container">
            <h1>Analyse conversation <br/>
                for excellence</h1>
                <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >
                <div style={{"font-family": "'Plus Jakarta Sans', sans-serif"}} className="analysis-grid-container">
                    <div  className="grid-box">
                        <span>
                            {counterOn && <CountUp style={{"font-size": "4rem"}}  start ={0} end={21} />}
                            <span>%</span> 
                            </span>
                            {/* <h1>
                                 <CountUp  start ={0} end={100} duration={2} delay={0} />
                            </h1> */}
                        <p>Increase in Sales</p>
                    </div>
                    <div  className="grid-box">
                        <span>{counterOn && <CountUp style={{"font-size": "4rem"}}  start ={0} end={27} />}<span>%</span></span>
                        <p>Increase in CSAT</p>
                    </div>
                    <div className="grid-box">
                        <span>{counterOn && <CountUp style={{"font-size": "4rem"}}  start ={0} end={100} />}<span>%</span></span>
                        <p>Compliance monitoring</p>
                    </div>
                    <div className="grid-box">
                        <span>{counterOn && <CountUp style={{"font-size": "4rem"}}  start ={0} end={17} />}<span>%</span></span>
                        <p>Increase in <br/>
                            Collection Rate</p>
                    </div>
                    <div className="grid-box">
                        <span>{counterOn && <CountUp style={{"font-size": "4rem"}}  start ={0} end={56} />}<span>Sec</span></span>
                        <p>Lower AHT</p>
                    </div>
                    <div className="grid-box">
                        <span>{counterOn && <CountUp style={{"font-size": "4rem"}}  start ={0} end={60} />}<span>%</span></span>
                        <p>Decrease in <br/>
                            Ramp up time</p>
                    </div>
                </div>
                </ScrollTrigger>
        </div>
        
        </>
    )
}

export default Part2;