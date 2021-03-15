import React,{useState,useEffect} from "react"
import axios from 'axios';

const MyApp = () => {

    const [games,setGames] = useState([])
    const[GameName,setGameName] = useState({GameName : " test"})
    const[GameCompany,setGameCompany] = useState({GameCompany : "test"})
    const[GamePictureUrl,setGamePictureUrl] = useState({GamePictureUrl : "test"})
    const url = "http://localhost:8080/home/";

    // GET
   useEffect(() => {
    axios.get(url).then(json => setGames(json.data))     
   },[])
   console.log(games)
   
   


   const GameNameHandler = (event) => {
    setGameName({GameName: event.target.value})
   }
   const GameCompanyHandler = (event) => {
    setGameCompany({GameCompany: event.target.value})
    }
    const GamePictureUrlHandler = (event) => {
    setGamePictureUrl({GamePictureUrl: event.target.value})
    }   


   const array1 = [...games]

   const allofthem = array1.map((i , index) => {
       return <li key={i._id}>Game Name : {i.GameName} made by : {i.GameCompany}</li>
   })

const submithandler = (event) => {
       event.preventDefault()

       //POST
   const gameObject = {
    GameName : GameName.GameName,
    GameCompany : GameCompany.GameCompany,
    GamePictureUrl : GamePictureUrl.GamePictureUrl
    }

    axios.post(url,gameObject)
    .then((res) => {
        console.log("DATA",res.data)
    }).catch((error) => {
        console.log("ERROR",error)
    });

    setGameName(GameName)
    setGameCompany(GameCompany)
    setGamePictureUrl(GamePictureUrl )
}

    return (
        <div>
            <h1>Games !!! </h1>
            <h1>Current Game List</h1>
            <h4>{allofthem}</h4>
            <hr></hr>

            <form>
                <input type="text" value={GameName.GameName} onChange={GameNameHandler}/>
                <h5>Change game name to : {GameName.GameName}</h5>

                <input type="text" value={GameCompany.GameCompany} onChange={GameCompanyHandler}/>
                <h5>Change game name to : {GameCompany.GameCompany}</h5>

                <input type="text" value={GamePictureUrl.GamePictureUrl} onChange={GamePictureUrlHandler}/>
                <h5>Change game name to : {GamePictureUrl.GamePictureUrl}</h5>

                <button onClick={submithandler}>Submit !</button>
            </form >

            
            
            
        </div>
    )
}


export default MyApp