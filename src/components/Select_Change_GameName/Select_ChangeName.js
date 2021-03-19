import React from "react"

const Select_ChangeName = (props) => {

    

    const selectedGame = Object.entries(props.game).map(([key,val]) => {  
        if(Object.entries(props.game).length >= 4) {
            return <h5 key={key}>{key} : {val}</h5>   
        }else{
            return null
        }     
        })
    
    const UpdateButton = Object.entries(props.game).map(([key,val]) => {
        if(Object.entries(props.game).length >= 4) {
            return<button style={{marginLeft: '2px', backgroundColor:"SpringGreen",fontWeight: "bold"}} onClick={() => props.updateHandler(val)}>Click to Edit : {key}</button>
        }else{
            return null
        }
                
        })



    return(
        <div>
           <h5>{selectedGame}</h5>
           <p>{UpdateButton}</p>
           <h1 style={{marginLeft: '10px',marginTop:'30px'}}>Edit Game Name to : </h1>
           <input style={{marginLeft: '10px'}} onChange={props.handleUpdateSubmit} value={props.valueG} type="text" defaultValue="type here you updated info"/>
           <h5 style={{marginLeft: '10px'}}> Your changes look like this : {props.gameNameUpdate}</h5>
        </div>
    )
}


export default Select_ChangeName