import React,{useState,useEffect} from "react"
import axios from 'axios';

const MyApp = () => {

    const [games,setGames] = useState([])
    const[GameName,setGameName] = useState({GameName : " test"})
    const[GameCompany,setGameCompany] = useState({GameCompany : "test"})
    const[GamePictureUrl,setGamePictureUrl] = useState({GamePictureUrl : "test"})
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

   const array1 = [...games]

   const allofthem = array1.map((i , index) => {
       return <li key={i._id}>Game Name : {i.GameName} made by : {i.GameCompany} 
       <img src={i.GamePictureUrl} alt = "GamePicture"/> <button onClick={(e) => deleteHandler(i._id,e)}>Delete ?</button> <button onClick={() => selectSpecificGameHandler(i._id)} 
        >Select a game ?</button></li>
   })


    return (
        <div>
            <h1>Games !!! </h1>
            <h1>Current Game List</h1>
            <button onClick={updatedListHandler}>Generate Updated List</button>
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
            
            <hr/>
            <br />
           
           {Object.entries(game).map(([key,val]) => 
            <h2 key={key}>{key} : {val}   
            <p> Edited it as : {GameNameUpdate.GameName}</p>
            <button onClick={() => updateHandler(val)}>EDIT ?</button>
             </h2> 
           )}
           <h1>Change Game Name : </h1>
           <input onChange={handleUpdateSubmit} value={GameNameUpdate.GameName} type="text" defaultValue="type here you updated info"/>
            
           
            
            
            
        </div>
    )
}


export default MyApp