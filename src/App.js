import Request from "./components/request";
// import {useState} from 'react'
// import axios from "axios";


// const categoriesurl = 'https://api.chucknorris.io/jokes/random?category={category}'
// const searchurl = 'https://api.chucknorris.io/jokes/search?query={query}'

const App = () => {
	

	return (
		<>
			<div className="main">
				<div className="main-content">
					<Request />
				</div>
				<div className="joke"></div>
			</div>
			<div className="favorite"></div>
		</>
	);
};
export default App;
