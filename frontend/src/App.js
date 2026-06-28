
import './App.css';
import { Routerr } from './compnent/routerr';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Userheader } from './compnent/userheader';
import { Adminheader } from './adminheader';
import { useEffect, useState } from 'react';
import { Usercontext } from './usercontext';


function App() {

  const [role,setRole]=useState("")

useEffect(()=>{

  const savedRole=localStorage.getItem("role")
if(savedRole){
  setRole(savedRole)
}

},[])



  return (
 <>

 <Usercontext.Provider value={{role,setRole}}>

{role=== "admin"? <Adminheader/>: <Userheader/>}

   <Routerr/>
 </Usercontext.Provider>

 </>   

  );
}

export default App;
