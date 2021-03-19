import React from "react"
import bird from "../../resources/bird.gif"
import "./Title.css"

const Title = () => {

    const styleItUp = {
       marginBottom :"50px",
       textDecoration: "underline"
    }
    

    return (
        <div>
            <h1 style={styleItUp} className="title">Gaming Skyloft <img className="logo" src={bird} alt="freedom"/></h1>
            

        </div>
    )
}


export default Title