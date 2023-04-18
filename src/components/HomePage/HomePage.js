import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import "./HomePage.css"
import rickHomeImg from "../../images/rick-home.webp"
import mortyHomeImg from "../../images/Morty-home.webp"
import jerryHomeImg from "../../images/jerry-home.jpeg"
import bethHomeImg from "../../images/beth-home.webp"
import summerHomeImg from "../../images/summer-home.webp"
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {

return (
    
    <div className="home-page">
<h1> The Ultimate Rick and Morty Guide </h1>
    <NavBar /> 
   


        <h2 className = "h2-home" > Featured Characters</h2>

        <div className="featured-characters-div"> 
        
        <ul className=" list-group featured-characters-list">
        <Link to = "/characters-list/1" > <li className="list-group-item list-group-item-home">   <img className="home-img" src = {rickHomeImg} alt="rick-home-img"  />Rick </li> </Link> 
          <Link to = "/characters-list/2"> <li className="list-group-item list-group-item-home">  <img className="home-img" src = {mortyHomeImg} alt = "Morty-home-img"/> Morty </li> </Link>  
          <Link to = "/characters-list/5" > <li className="list-group-item list-group-item-home"> <img className="home-img" src = {jerryHomeImg} alt = "jerry-home-img" />  Jerry </li> </Link>  
           <Link to = "/characters-list/4"> <li className="list-group-item list-group-item-home"> <img className="home-img" src = {bethHomeImg} alt = "beth-home-img"/> Beth  </li> </Link> 
          <Link to = "/characters-list/3"> <li className="list-group-item list-group-item-home"> <img className="home-img" src = {summerHomeImg} alt = "summer-home-img"/> Summer  </li> </Link>  
        </ul>

        </div>
        <h2 className = "h2-home"> Welcome to the world of Rick and Morty </h2>
        <div className="about-home">
       
        <p>Are you new to Rick and Morty? No worries! We're here to introduce you to this fantastic animated sitcom. Created by Justin Roiland and Dan Harmon, Rick and Morty takes you on a thrilling adventure through space and alternate dimensions, as you follow the misadventures of mad scientist Rick Sanchez and his good-hearted, yet easily influenced, grandson Morty Smith.</p>
        <p>Combining humor, science fiction, and deep philosophical themes, Rick and Morty has captivated audiences worldwide and garnered a passionate fan-base. So buckle up and get ready to explore the many bizarre and hilarious worlds of Rick and Morty!</p>

        </div>       

        <button className="back-top-btn"> <a href="#home-nav-bar">Back to the Top</a>  </button>
</div>


)


}


export default HomePage;