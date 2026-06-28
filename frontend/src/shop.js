import { useEffect, useState } from "react"

export const Shop=()=>{

    // for showing product
    
    const [savepro,setsavepro]=useState([])
    
    useEffect(()=>{
    
        getproduct()
    },[])
    
    
    const getproduct=async()=>{
    
        const saveprodata=await fetch("https://multipraclive-1.onrender.com/api/getproduct",{
    method:"Get"
    
        })
    
    if(saveprodata){
        const sv=await saveprodata.json()
    
        if(sv.statuscode===1){
            // alert("pro data fetched")
        setsavepro(sv.allprodata)
    
        }
        else{
            // alert("pro data not fetched")
        }
    }
    
    }

return(

<>
  <h1>shop now</h1>

{/* map fucntion of product */}
<div className="container">

  <div className="row">

{
  savepro.map((item,index)=>(
<div className="col-lg-3 col-md-4 col-6 mb-4"
key={index}>

    <img 
 src={`${item.propic}`}
    width={"100px"}
    alt="product"

    />
  
    <p>{item.proname}</p>
    <p>{item.proprice}</p>
    <p>{item.prodetail}</p>

</div>



  ))
}



  </div>

</div>


</>
  
)


}