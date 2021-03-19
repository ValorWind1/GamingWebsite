import React from "react"
import "./Gamelist.css"

const Gamelist = (props) => {

    const style= {
        textAlign:"left",
        marginBottom :"50px",
        padding: "20px",

    }

    const redButton = {
        backgroundColor: "lightCoral"
        
    }

    const blueButton = {
        backgroundColor : "DeepSkyBlue"
    }


    const array1 = [...props.games]

   const allofthem = array1.map((i , index) => {
       return <li className="list" key={i._id}>Game Name : {i.GameName} made by : {i.GameCompany} 
        <button style={redButton} onClick={(e) => props.deleteHandler(i._id,e)}>Delete</button> <button style={blueButton} onClick={() => props.selectSpecificGameHandler(i._id)} 
        >Select a game </button></li>
   })

   const array2 = [...props.games]
   const pictureArray = array2.map(i => {
        return <img key= {i._id} className="image"src={i.GamePictureUrl} alt=" "  /> 
   })
   
   
    return(
        <div>
            <h1 style={style}>The Games</h1>
            <h4>{allofthem}</h4>
            <h4>{pictureArray}</h4>

        
        </div>
    )
}

export default Gamelist