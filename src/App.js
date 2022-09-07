import NavBar from "./Components/Navbar/NavBar.js";
import Animatedsection from "./Components/Animatedsection/Animatedsection.js";
import Reviewsection from "./Components/Reviewsection/Reviewsection.js";
import Rewardsection from "./Components/Rewardsection/Rewardsection.js";
import SigninSection from "./Components/SigninSection/Signinsection.js";
import Footer from "./Components/Footer/Footer.js";
import "./App.css"
// import Homepage from "./homepage.js";
import Part1 from "./Components/part1/part1.js"
import Part2 from "./Components/part2/part2.js";
function App() {
  return (
    <div className="App" style={{"overflow-x":"hidden"}}>
      <div className="green-circle"></div>
      <div className="blue-circle"></div>
      <NavBar/>
      {/* <Homepage/> */}
      <Part1/>
        <Part2/>
       <Animatedsection/>
      <Reviewsection/>
      <Rewardsection/>
      <SigninSection/>
      <Footer/>
    </div>
  );
}

export default App;
