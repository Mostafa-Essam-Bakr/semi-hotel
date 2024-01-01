

import {  Link, NavLink } from "react-router-dom";
import Pro from "./Product";
import IndividualIntervalsExample from "./Sliderimg"
import Example from "./Lunch";
import cover from "./Assets/imge2.webp"
import "./Home.css"

export default function Home(){
    return(<div>
        <nav className="navhom" style={{display:"flex",justifyContent:"space-around",alignItems:"center",color:"white",height:"50px",
    backgroundColor: "rgb(82, 113, 141)"}}> <h1 className="logo"><i className="fa-solid fa-square-h fa-lg " style={{color:"white"}}></i>ome</h1>
               <div className="pbook" style={{display:"flex" , flexDirection:"column"}}><Link to="./Book" className="h1 book" >
                 Book                           <i className="fa-solid fa-square-caret-down"></i>

                 
                 
                 
                  </Link>
                  <ul className="bkslide">       

<Link id="RouterLink" to="/Hotel"> <li>Hotel</li></Link> 
<Link id="RouterLink" to="/"> <li>Room</li></Link> 
<Link id="RouterLink" to="/"> <li>place</li></Link></ul>
</div>


<Example/>


















               
                  

        <Link to="/Dashbord" className="h1" > Admin </Link>   
             <Link to="/Login" className="h1" > LOG OUT </Link>
</nav>

<div> <img src={cover} className="cover"/></div>

<div>

<IndividualIntervalsExample />


</div>

<div className="bs"><button className="b1" type="submit">Book your place</button>
<button  className="b2" type="submit" >Type Hotel</button></div>


<div>
    <Pro />
</div>













    </div>)
}