import React,{useState,useEffect} from "react";
import List from "./List/List.js"
import FromIndex from "./Form/FormIndex.js";
import "./NumberGuide.css"


const NumberGuide=()=>{
    const [user,setUser]=useState([{NameInput:"Ahemet",PhoneNumberInput:"05056968957"},{NameInput:"Mehmet",PhoneNumberInput:"05031248957"},{NameInput:"Ayşe",PhoneNumberInput:"05031248967"}]);

    useEffect(()=>{
        console.log(user);
    },[user])
    
    return(
    <div className="Container">
        <h1>Phone Guide</h1>
        <FromIndex user={user} setUser={setUser}/>
        <List user={user}/>
    </div>
)}
export default NumberGuide