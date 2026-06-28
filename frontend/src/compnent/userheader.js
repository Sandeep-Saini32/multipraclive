import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Usercontext } from "../usercontext"

export const Userheader=()=>{


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
<li> <Link to={"/"}>home</Link></li>
<li> <Link to={"shop"}>shop</Link></li>
<li><Link to={"login"}>login</Link></li>
<li><Link to={"signup"}>signup</Link></li>

<button onClick={logoutfc}>logout</button>

    </ul>

</div>
</div>



</>


)


}