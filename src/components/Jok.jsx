

const Jok = ({ jokes, selected, type,addToFavHandler,addToFav,addFav }) => {

 
	return (
		<div className="jokes">
			{jokes.map((joke) => {
				return (
					<div className="joke-item" key = {joke.id}>
						<a href="#"><img src="./images/mail.svg" alt="mail-icon" className="joke__mail-svg" /></a>

						<span className="joke__id">ID:{joke.id}<img src="./images/link-share.svg" alt="link-share" /></span>

						<button className={addToFav?"joke__btn-full": "joke__btn"} onClick={() => addFav()}> </button>


						<p className="joke__value">{joke.value}</p>
						{type === "selected" && <p className="joke__selected">{selected}</p>}
						<p className="joke__updated">
							Last update:
							{new Date().getTime() - new Date(joke.updated_at)}
							hours ago
						</p>
						
					</div>
				);
			})}
		
		</div>
	)
};

export default Jok;