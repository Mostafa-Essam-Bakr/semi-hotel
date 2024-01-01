import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import { Outlet } from "react-router-dom";
import "./Components/Dashbord.css"

export default function Dashbord(){
    return(
        <div>
            <Topbar/>

            <div style={{display:"flex", justifyContent:"center",flexDirection:"column",alignItems:"center"}}><Sidebar/>
         <Outlet/>
            </div>
            
            
        </div>
    )
}