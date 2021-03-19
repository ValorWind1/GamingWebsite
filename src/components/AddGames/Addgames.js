import React from "react"

const Addgames = (props) => {


    return(
        <div>

    <h1 style={{marginLeft: '10px',marginTop:"40px",marginBottom: '20px'}} >Add more of your games</h1>
            <form style={{marginLeft: '10px'}}>
            <h5 style={{fontWeight: "bold"}}> Type Game Name : {props.GameName}</h5>
                <input type="text" value={props.GameName} onChange={props.GameNameHandler}/>
                
                <h5 style={{fontWeight: "bold"}} >Type Game Company Name : {props.GameCompany}</h5>
                <input type="text" value={props.GameCompany} onChange={props.GameCompanyHandler}/>
                
                <h5 style={{fontWeight: "bold"}} >Type Game Picture : {props.GamePictureUrl}</h5>
                <input type="text" value={props.GamePictureUrl} onChange={props.GamePictureUrlHandler}/>
            
                <button style={{marginLeft: '10px',backgroundColor:"DeepPink" , fontWeight: "bold"}} onClick={props.submithandler}>Add your game</button>
            </form >

            <button style={{backgroundColor:"snow" , marginLeft: '10px',marginTop:"20px", color:"Aqua" , fontWeight: "bold"}} onClick={props.updatedListHandler}>Generate Updated List</button> 

        </div>
    )
}



export default Addgames