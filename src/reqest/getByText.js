import axios from "axios";



const getByText = async (text) => {
	const response = await axios.get(
		`https://api.chucknorris.io/jokes/search?query=${text}`
	);
	return response.data.result;
};
export default getByText;

