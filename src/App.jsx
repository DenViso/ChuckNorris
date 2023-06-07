import { useState } from "react";
import Inputs from "./components/Inputs";
import Jok from "./components/Jok";

const App = () => {
	const [selected, setSelected] = useState("dev");
	const [jokes, setJokes] = useState([]);
	const [type, setType] = useState("random"); // тип запроса
	const [addToFav, setAddToFav] = useState(false);
	const [favs, setFavs] = useState([]);

	const addToFavHandler = () => {
		if (!addToFav) {
			setAddToFav(true);
		} else {
			setAddToFav(false);
		}
	};

	const addFav = (jokes) => {
		return setFavs( [...favs,jokes]);
	};
console.log(favs);

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
				<div>
					<Jok
						jokes={jokes}
						selected={selected}
						type={type}
						// addToFavHandler={addToFavHandler}
						// addToFav={addToFav}
						addFav={addFav}
					/>
				</div>
			</div>
			<div className="favs">
				<h2 className="favs__title">Favorites</h2>
				<div className="jokes">
					{favs.map((fa)=>{return(<p>{fa}</p>)})}
				</div>
			</div>
		</div>
	);
};
export default App;
