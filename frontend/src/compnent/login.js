import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Usercontext } from "../usercontext"


export const Login=()=>{

    const navigate=useNavigate()

 const {setRole}=useContext(Usercontext)   
 
const [loginem,setloginem]=useState("") 
const [loginpass,setloginpass]=useState("") 



const check=async(e)=>{
e.preventDefault()

const logindata={loginem,loginpass}


const save=await fetch("https://multipraclive-1.onrender.com/api/loginpage",{

method:"post",
body:JSON.stringify(logindata),
headers:{
    "content-type":"application/json;charset=utf-8"}

})

const sv=await save.json()
if(sv.statuscode===1){
 alert("login successfuly")
 localStorage.setItem("name",sv.name)
 localStorage.setItem("role",sv.role)

 setRole(sv.role)

 if(sv.role==="admin"){
    navigate("/adminhome")
 }
 else{
    navigate("/")
 }

}

else{
    alert("incorrect info")
}




}

return(
<>
<h1>login page</h1>



<form>
    <label> enteremail<input type="email" onChange={(e)=>setloginem(e.target.value)}></input></label><br/>
    <label> enter password<input type="password" onChange={(e)=>setloginpass(e.target.value)}></input></label><br/>
    <button onClick={check}>submit</button>

</form>


</>




)

}