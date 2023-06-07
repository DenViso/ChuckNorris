import axios from "axios";



const getByCategory = async (categories) => {
	const response = await axios.get(
		`https://api.chucknorris.io/jokes/random?category=${categories}`
	);
	return [response.data];
};
export default getByCategory;
