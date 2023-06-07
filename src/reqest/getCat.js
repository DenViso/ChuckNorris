import axios from "axios";

// запрос на категорії

const getCat = async () => {
	const response = await axios.get(
		"https://api.chucknorris.io/jokes/categories"
	);
	return response.data;
};
export default getCat;
