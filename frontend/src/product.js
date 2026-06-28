import { useEffect, useState } from "react"

export const Product=()=>{

    const [proname,setproname]=useState("")
    const [proprice,setproprice]=useState("")
    const [prodetail,setprodetail]=useState("")
    const [propic,setpropic]=useState("")

const proadd=async(e)=>{
    e.preventDefault()

    const prodata= new FormData()

  prodata.append("proname",proname)  
 prodata.append("proprice",proprice)    
 prodata.append("prodetail",prodetail)    
 prodata.append("propic",propic)    

const result=await fetch("http://localhost:9000/api/addproduct",{
method:"post",
body:prodata

})

if(result.ok){
    const res=await result.json()
    if(res.statuscode===1){
        alert("product data stored")
        getproduct()
    }
    else{
        alert("product data not stored")
    }
}


}

// for showing product

const [savepro,setsavepro]=useState([])

useEffect(()=>{

    getproduct()
},[])


const getproduct=async()=>{

    const saveprodata=await fetch("http://localhost:9000/api/getproduct",{
method:"Get"

    })

if(saveprodata){
    const sv=await saveprodata.json()

    if(sv.statuscode===1){
        alert("pro data fetched")
    setsavepro(sv.allprodata)

    }
    else{
        alert("pro data not fetched")
    }
}

}


return(

    <>
    <h1>product page</h1>




    <form>


<label> product name<input type="text"  value={proname}onChange={(e)=>setproname(e.target.value)}></input></label><br/>
<label> product price<input type="number" value={proprice}onChange={(e)=>setproprice(e.target.value)} ></input></label><br/>
<label> product detail<input type="text" value={prodetail}onChange={(e)=>setprodetail(e.target.value)} ></input></label><br/>
<label> product pic<input type="file" onChange={(e)=>setpropic(e.target.files[0])}></input></label><br/> 

<button onClick={proadd}>submit</button>

    </form>
 
<div className="container">

<div className="row">
   
 {

savepro.map((item,index)=>(
<div className="col-lg-3 col-md-4 col-6 mb-4"
key={index}>

    <img 
 src={`${item.propic}`}
    width={"100px"}

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