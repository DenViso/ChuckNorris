const JokItem = ({ joke, addFav, favs }) => {
	return (
		<div className="joke-item">
			<a href="#">
				<img
					src="./images/mail.svg"
					alt="mail-icon"
					className="joke__mail-svg"
				/>
			</a>

			<span className="joke__id">
				ID:{joke.id}
				<img src="./images/link-share.svg" alt="link-share" />
			</span>

			<button
				className={favs.some((JokItem)=>JokItem.id === joke.id) ? "joke__btn-full" : "joke__btn"}
				onClick={() => addFav(joke)}></button>

			<p className="joke__value">{joke.value}</p>

			{joke.categories[0] && (
				<p className="joke__selected">{joke.categories[0]}</p>
			)}
			<p className="joke__updated">
				Last update:
				{new Date().getTime() - new Date(joke.updated_at)}
				hours ago
			</p>
		</div>
	);
};

export default JokItem;
