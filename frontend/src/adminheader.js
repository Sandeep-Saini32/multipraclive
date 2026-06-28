import { useContext } from "react"
import { Usercontext } from "./usercontext"
import { Link, useNavigate } from "react-router-dom"

export const Adminheader=()=>{
const adname=localStorage.getItem("name") 

    const {setRole}=useContext(Usercontext)

   const navigate=useNavigate()
   
  const logoutfc=()=>{

    localStorage.removeItem("role")
    localStorage.removeItem("name")

    setRole("")
    navigate("/login")
  } 

return(
<>

<div className="container-fluid">
<div className="row">
    <ul className="d-flex list-unstyled gap-4">

<li><Link to={"adminhome"}>Dashboard</Link> </li>
<li><Link to={"product"}>products</Link> </li>
<li><Link to={"order"}>orders</Link> </li>
<li><Link to={"login"}>login</Link> </li>
<li><Link to={"customer"}>customer</Link> </li>




<button onClick={logoutfc}>logout</button>

    </ul>



</div>
<h5>welcome {adname}</h5>
</div>



<p className="text-light">huyguyg</p>
</>

)



}