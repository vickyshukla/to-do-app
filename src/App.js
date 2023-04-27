import React, { useState } from "react";
import StoredData from "./StoredData";

const App =()=>{

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const itemLists = () =>{
    setItems((oldItems) =>{
      return[...oldItems, inputList]
    })
  };
  const deleteItems=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
        return index !==id;
      });
    })
  };

  return(
   <>
   <div className="container">
    <div className="main">
      <h1>To-Do List</h1>
      <input type="text" placeholder="ADD AN ITEM" onChange={itemEvent} value={inputList}/>
      <button onClick={itemLists}><i className="fa fa-plus" aria-hidden="true" /></button>
      <ol>
    {items.map( (itemvalue,index) => {
      return(
      <StoredData id={index} key={index} text={itemvalue}
      onSelect={deleteItems}
      />)
    })}
   </ol>
    </div>
    
   </div>

   
   </>
  )
};

export default App;