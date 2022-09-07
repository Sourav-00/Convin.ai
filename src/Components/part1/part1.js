import "./part1.css"
// import introRightImg1 from "./../../images/intro-right-img1.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Part1(){
    useEffect(()=>{
        Aos.init({duration:3000,debounceDelay: 50});
    },[])
    return (
        <>
        <div className="intro-container">
                <div className="intro-left">
                                    <div className="intro-left-main">
                                    <h1>
                                    <span className="grad-span">3X</span> your contact center <br/>
                                    performance with <br/>
                                    <span className="grad-span">Automated Call QA</span>
                                    {/* <span>Win Behavior Analysis</span> */}
                                    </h1>
                                    <p>Convin improves agent performance, enhances customer experience, and
                                    increases conversions with conversation intelligence.</p>
                                    <button>Sign up</button>
                                    </div>
                    </div> 

                    <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="intro-right"> 
                                        <div>
                                        {/* <div className="item"><img src = {introRightImg1} alt =""/> */}
                                        </div>
                        </div>
        </div>
        
        <div className="intro-image-banner">
           <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62e76fdac2321d9a5b8b595b_carestack.png" alt="" />
           </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62e76faeeb6f4a4e05166ddc_medibuddy-logo-idakibjltg%201.png" alt="" />
            </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62e76fac5d99645eebf82b3a_logo-nav%201.png" alt="" />
            </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62e76fb32fdfe1e17e811fa2_treebo.png" alt="" />
            </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62e76fb1c95a775b061c704b_1200px-Simpl_logo%201.png" alt="" />
            </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62f5ead4cea3739524010d76_aakash_byjus%201%20(1).png" alt="" />
            </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62e76fa972181e7c03bdb1db_thomas%20cook.png" alt="" />
            </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62e76faf43e47b5a6376fba2_spark.png" alt="" />
            </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62f4f0324f9c7079d7e4e449_kuoni-sotc-logo%202.png" alt="" />
            </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62f6264eea0370fd315dc9f4_index.png" alt="" />
            </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62e76fdac2321d9a5b8b595b_carestack.png" alt="" />
            </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62e76faeeb6f4a4e05166ddc_medibuddy-logo-idakibjltg%201.png" alt="" />
            </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62e76fac5d99645eebf82b3a_logo-nav%201.png" alt="" />
            </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62e76fb32fdfe1e17e811fa2_treebo.png" alt="" />
            </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62e76fb1c95a775b061c704b_1200px-Simpl_logo%201.png" alt=""/></div>
             <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62e76fac5d99645eebf82b3a_logo-nav%201.png" alt="" />
             </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62e76fb32fdfe1e17e811fa2_treebo.png" alt="" />
            </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62e76fb1c95a775b061c704b_1200px-Simpl_logo%201.png" alt="" />
            </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62f5ead4cea3739524010d76_aakash_byjus%201%20(1).png" alt="" />
            </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62e76fa972181e7c03bdb1db_thomas%20cook.png" alt=""/>
            </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62e76faf43e47b5a6376fba2_spark.png" alt="" />
            </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62f4f0324f9c7079d7e4e449_kuoni-sotc-logo%202.png" alt="" />
            </div>
            <div className="item"><img src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62f6264eea0370fd315dc9f4_index.png" alt="" />
            </div>
            </div>
          
        

        </>
    )
}
export default Part1;