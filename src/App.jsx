import { useState,useEffect } from "react";
import Inputs from "./components/Inputs";
import Jok from "./components/Jok";
import JokItem from "./components/JokeItem";

const App = () => {
	const [selected, setSelected] = useState("dev");
	const [jokes, setJokes] = useState([]);
	const [type, setType] = useState("random"); // тип запроса
	const [favs, setFavs] = useState([]);


	useEffect(() => {
		const localFavs = localStorage.getItem("favs");
		if (localFavs) {
			setFavs(JSON.parse(localFavs));
		}
	},[]);

	useEffect(() => {
		localStorage.setItem("favs", JSON.stringify(favs));
	},[favs]);

	const addFav = (jokes) => {
		if (favs.some((joke)=>{
			 return joke.id === jokes.id
			})) {
			setFavs((prevFavs) =>{
				return prevFavs.filter((fav) =>{ 
					return fav.id !== jokes.id
				})
			})
		 	}else{
		setFavs((prevFavs) => [...prevFavs, jokes]);
	}
	};
	

	return (
		<div className="App">
			<div className="main">
				<div className="main-content">
					<Inputs
						setJokes={setJokes}
						setSelected={setSelected}
						selected={selected}
						type={type}
						setType={setType}
					/>
				</div>

				<Jok jokes={jokes} favs={favs} addFav={addFav} />
			</div>
			<div className="favs">
				<h2 className="favs__title">Favorites</h2>
				<div className="jokes">
					{favs.map((favJoke) => {
						return (
							<JokItem
								joke={favJoke}
								key={favJoke.id}
								addFav={addFav}
								favs={favs}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default App;
