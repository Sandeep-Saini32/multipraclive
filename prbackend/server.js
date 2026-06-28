const express=require("express")
const cors=require("cors")
const multer  = require("multer")
const mongoose=require("mongoose")
const cloudinary = require('cloudinary').v2
const {CloudinaryStorage}=require("multer-storage-cloudinary")


const app=express()

const cloudinarysecret="nORy3_jZKsmiuIQoZ4QFXTF9aLY"
const cloudinarykey="633214675758312"
const cloudName="dwtvuglpw"

cloudinary.config({
cloud_name:cloudName,
api_key:cloudinarykey,
api_secret:cloudinarysecret
})



const mystorage= new CloudinaryStorage({
cloudinary:cloudinary,
params:{
    folder:"multipraclive",
    allowed_format:["jpg","png","jpeg","webp"]
}

                      
})

app.use(cors())
app.use(express.json())
app.use("/uploads",express.static("uploads"))

const path = require("path")


app.listen(9000,()=>{
    console.log("server running")
})

mongoose.connect("mongodb+srv://sandeepsaini6712_db_user:xlY2B7R9QEk70wOP@bookstore.5p6gufq.mongodb.net/multipraclive")

.then(()=>{
    console.log("connected to db")
})

.catch(()=>{
    console.log("not connected to db")
})



// for signup

const signupSchema=mongoose.Schema({
    name:String,
email:String,
pass:String,
cfpass:String,
role:{
    type:String,
    default:"user"
}


})

const signupModel= mongoose.model("signup",signupSchema)

app.post("/api/signup",async (req,res)=>{

    const show = await signupModel({
name: req.body.name,
email:req.body.email,
pass:req.body.pass,
cfpass:req.body.cfpass,


 })

 const sh=await show.save()
 
 if(sh){
    res.send({statuscode:1})
    console.log(sh)
 }
else{
    res.send({statuscode:0})
}


})

// for login

app.post("/api/loginpage",async(req,res)=>{


const save=await signupModel.findOne({email:req.body.loginem})

if(! save){
    return res.send({
        statuscode:0
    })
}

if(save.pass === req.body.loginpass){

    res.send({statuscode:1,
        id:save._id,
        email:save.email,
        name:save.name,
       role:save.role
    })
}

else{
    res.send({statuscode:0})
}


})


// multer setup
let pic
const storage=multer.diskStorage({
destination:function(req,file,cb){
    cb(null,"./uploads")
},

filename:function(req,file,cb){
    pic=Date.now()+file.originalname
    cb(null,file.fieldname+"-"+pic)
}

})

const upload=multer({storage:mystorage})


//s
// saving product
const proSchema=mongoose.Schema({
    proname:String,
    proprice:Number,
    prodetail:String,
    propic:String,
    Addedon:String,
})

const proModel=mongoose.model("product",proSchema)

app.post("/api/addproduct",
    upload.single("propic"),async(req,res)=>{

let pic
  if(!req.file){
    pic="default.webp"
  }
else{
    pic=req.file.path
}

let newrecord= new proModel({
proname:req.body.proname,
proprice:req.body.proprice,
prodetail:req.body.prodetail,
propic:pic,
Addedon:new Date(),


})

let result=await newrecord.save()

if(result){
    res.send({statuscode:1})
}

else{
    res.send({statuscode:0})
}
    }
)

// getting products
app.get("/api/getproduct",async(req,res)=>{

    const savepro= await proModel.find()

  if(savepro){
    res.send({statuscode:1, allprodata:savepro})
    console.log(savepro)
  } 
  
  else{
    res.send({statuscode:0})
  }

})

// getting user detail
app.get("/api/getcustomer",async(req,res)=>{

    const savecustom=await signupModel.find()

    if(savecustom){
        res.send({statuscode:1,allcustdata: savecustom})
    }
else{
    res.send({statuscode:0})
}

})