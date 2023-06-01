
import axios from "axios";
import { useState } from "react";

// "https://api.chucknorris.io/jokes/random"


  const Request = ( ) => {
    const [random, setRandom] = useState([]);
   

    const getRandomJoke = () => {
      axios.get("https://api.chucknorris.io/jokes/random")
      .then((res) => {
        setRandom(res.data.value);
      })
    }
    const randomeActive = () => {
      getRandomJoke();
    }
  

    return (
      <div id="Randome">
      
     {randomeActive && <>
      <label htmlFor="Randome">Randome</label>
      <input type="radio" name="Randome" id="Randome" className="random"   />
     <p> {random}</p>
     </>}

      <button type="button" onClick={() => getRandomJoke()}>Get a Joke</button>
    </div>
    )
    
  }

  export default Request