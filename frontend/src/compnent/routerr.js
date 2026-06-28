import { Route, Routes } from "react-router-dom"
import { Home } from "./home"
import { Signup } from "./signup"
import { Login } from "./login"
import { Adminhome } from "./adminhome"
import { Userheader } from "./userheader"
import { Adminheader } from "../adminheader"
import { Order } from "../order"
import { Product } from "../product"
import { Shop } from "../shop"
import { Customer } from "../customer"

export const Routerr=()=>{

return(
<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="signup" element={<Signup/>} />
    <Route path="login" element={<Login/>} />
    <Route path="adminhome" element={<Adminhome/>} />
    <Route path="userheader" element={<Userheader/>} />
    <Route path="adminheader" element={<Adminheader/>} />
<Route path="order" element={<Order/>}/>
<Route path="product" element={<Product/>}/>
<Route path="shop" element={<Shop/>}/>
<Route path="customer" element={<Customer/>}/>

</Routes>
)
    

}