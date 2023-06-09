import JokItem from "./JokeItem";

const Jok = ({jokes, addFav,favs}) => {
	return (
		<div className="jokes">
			{jokes.map((joke) => {
				return <JokItem joke={joke} key={joke.id} addFav={addFav} favs={favs}/>
			})}
		</div>
	);
};

export default Jok;
