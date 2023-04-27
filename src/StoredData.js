import React from "react";

const StoredData =(props) => {
    return (
    <>
    <div className="s-data">
    <i className="fa fa-times" aria-hidden="true" 
    onClick={()=>{
        props.onSelect(props.id); 
    }}
    />
    <li>{props.text}</li>
    </div>
    </>
    )  
};

export default StoredData;