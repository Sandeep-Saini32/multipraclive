import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const Signup=()=>{

    
const navigate=useNavigate()
    const [name,setename]=useState("") 
    const [email,setemail]=useState("") 
    const [pass,setpass]=useState("") 
    const [cfpass,setcfpass]=useState("") 

    
    const add=async(e)=>{
    e.preventDefault()

const data={name,email,pass,cfpass}

const show=await fetch("http://localhost:9000/api/signup",{

    method:"post",
    body:JSON.stringify(data),
    headers:{
        "content-type":"application/json;charset=utf-8"
    }
})

if(show.ok){
    const sh=await show.json()
    if(sh.statuscode===1){
        alert("register is done")
        navigate("/login")
      
    }
    else{
        alert("data not stored")
    }
}

    }


return(
    <>
    <h1>registration</h1>

  

<form>

    <label>name<input type="text" onChange={(e)=>setename(e.target.value)}></input></label><br/>
    <label>email<input type="email" onChange={(e)=>setemail(e.target.value)}></input></label><br/>
    <label>password<input type="password" onChange={(e)=>setpass(e.target.value)}></input></label><br/>
    <label> confirm passwoed<input type="password" onChange={(e)=>setcfpass(e.target.value)}></input></label><br/>
    <button onClick={add}>submit</button>

</form>


    
    </>
  

  
)

}
