import { useEffect, useState } from "react"

export const Customer=()=>{

const [savecustomer,setsavecustomer]=useState([])

useEffect (()=>{

customdata()
},[])

const customdata=async()=>{

const savecustom=await fetch("https://multipraclive-1.onrender.com/api/getcustomer",{
method:"Get"

})

if(savecustom){
    const ct=await savecustom.json()

    if(ct.statuscode===1){
        alert("user data fetched")
        setsavecustomer(ct.allcustdata)
    }
else{
    alert("user data not fetched")
}

}

}


return(

<>

<h1>customer page</h1>

<table className="table table-bordered table-striped table-hover">

    <thead className="table-dark">
    <tr>
           <th><h4>S.No.</h4></th>
        <th><h4>Name</h4></th>
        <th><h4>Email</h4></th>
        <th><h4>Pass</h4></th>
        <th><h4>role</h4></th>

     
    </tr>
</thead>

<tbody>
{
    savecustomer.map((a,index)=>

         <tr key={index}> 
         <td>{index+1}</td>

<td>
   
    {a.name}


</td>

<td>
 
    {a.email}
</td>

<td>
   {a.pass}
    

</td>

<td>
    {a.role}
</td>

<td>


</td>

</tr> 
    
    )
}
</tbody>

</table>



</>


)



}