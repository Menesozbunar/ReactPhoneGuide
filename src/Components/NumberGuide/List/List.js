import React,{useState} from "react";
import "./List.css"
const List = ({user}) => {

    const [filterText,setFilterText]=useState("");

    const filtered=user.filter((item)=>{
        return Object.keys(item).some((key)=> item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase()))
    })

    return (
        <div className="List">
            
            <input placeholder="Filtered..." value={filterText} onChange={(e)=>setFilterText(e.target.value)}/>
            <ul>
            {filtered  .map((user,i)=>(
           <li key={i}>
            <span >{user.NameInput }</span> 
            <span >{ user.PhoneNumberInput  }</span>  </li>
           ))}
            </ul>
            <h5>Total Person : {filtered.length}</h5>

        </div>)
}
export default  List ;