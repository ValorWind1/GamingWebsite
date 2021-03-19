import React,{useState,useEffect} from "react"
import axios from 'axios';
import Title from "./components/titleComponent/Title"
import Gamelist from "./components/CurrentGameList/Gamelist"
import Addgames from "./components/AddGames/Addgames"
import "./MyApp.css";
import Select_ChangeName from "./components/Select_Change_GameName/Select_ChangeName";

const MyApp = () => {

    const [games,setGames] = useState([])
    const[GameName,setGameName] = useState({GameName : " "})
    const[GameCompany,setGameCompany] = useState({GameCompany : " "})
    const[GamePictureUrl,setGamePictureUrl] = useState({GamePictureUrl : " "})
    const url = "http://localhost:8080/home/";
    const[game , setGame] = useState([])
 // ****************************************************************
    const[GameNameUpdate,setGameNameUpdate] = useState([])

    
    // GET
   useEffect(() => {
    axios.get(url).then(json => setGames(json.data))     
   },[])
   console.log(games)

   //Get Updated List 
   const updatedListHandler = async (event) => {
    event.preventDefault()
    axios.get(url).then(json => setGames(json.data))
    }


    //Get specific Game
    const selectSpecificGameHandler = (id) => {
        axios.get(`http://localhost:8080/home/${id}`)
        .then(json => setGame(json.data) )
        
    }

    //Update title
    const updateHandler = (id) => {
        console.log(id)
    axios.patch(`http://localhost:8080/home/${id}`,(GameNameUpdate) ) 
    .then(json => {
        setGame(json.data);
        // GETTING ALL PROPS, FIRST TRY TO GET ONLY THE TITLE
      })
      .catch(err => console.log(err) )
    }
    


   //POST
const submithandler = (event) => {
    event.preventDefault()
    
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

//DELETE
const deleteHandler = (id ,e) => {

    axios.delete(`http://localhost:8080/home/${id}`)
    .then(response => {
        console.log("Delete Response",response)
        console.log("Delete Response data",response.data)

        const deleteGame = [...games]
        
        deleteGame.filter(i => i.id !== id);
        setGames(deleteGame)
    })
}

// TO UPDATE/PATCH
//  WHEN WE CLICK AN ITEM IT WILL SHOW AND IF WE CLICK ANOTHER BUTTON WE CAN EDIT IT.

   const GameNameHandler = (event) => {
    setGameName({GameName: event.target.value})
   }
   const GameCompanyHandler = (event) => {
    setGameCompany({GameCompany: event.target.value})
    }
    const GamePictureUrlHandler = (event) => {
    setGamePictureUrl({GamePictureUrl: event.target.value})
    }   
    const handleUpdateSubmit = (event) => {
        setGameNameUpdate({GameName: event.target.value})
    }

    

    return (
        <div>

            <Title />
            <Gamelist games={games} deleteHandler={deleteHandler}
                selectSpecificGameHandler={selectSpecificGameHandler}
            />

            <div className="flex-container">
            <Addgames GameName={GameCompany.GameName} GameCompany={GameCompany.GameCompany} GamePictureUrl={GamePictureUrl.GamePictureUrl} GameNameHandler={GameNameHandler}  GameCompanyHandler={GameCompanyHandler}  GamePictureUrlHandler={GamePictureUrlHandler} submithandler={submithandler} updatedListHandler={updatedListHandler}/>

            <Select_ChangeName style={{display:"flex",alignItems: 'center'}} game={game} gameNameUpdate={GameNameUpdate.GameName} updateHandler={updateHandler} handleUpdateSubmit={handleUpdateSubmit} valueG={GameNameUpdate.GameName}/>
            </div>

        </div>
    )
}


export default MyApp