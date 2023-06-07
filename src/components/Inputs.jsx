import { useState, useEffect } from "react";
import getRandom from "../reqest/getRandome";
import getCat from "../reqest/getCat";
import getByCategory from "../reqest/getCategory";
import getByText from "../reqest/getByText";

const Inputs = ({ setJokes, setSelected, selected, type, setType }) => {
	const [categories, setCategories] = useState([]);
	const [search, setSearch] = useState("");// запит на інпут тексту




	// requests
	const getCategories = async () => {
		const response = await getCat();
		setCategories(response);
	};
	useEffect(() => {
		getCategories();
	}, []);

	// handlers
	const changeCategory = (e, catName) => {
		e.preventDefault();
		setSelected(catName);
	};

	// handler chooseCategories
	const chooseType = (e) => {
	setType(e.target.value);
	};

	// handlers random
	const getRand = async (e) => {
		e.preventDefault();
		const response = await getRandom();
		setJokes(response);
	};

	// handlers category
	const getCate = async (e) => {
		e.preventDefault();
		const response = await getByCategory(selected);
		setJokes(response);
	};

	//handler text
	const getText = async (e) => {
		e.preventDefault();
		if (!search) {
			return;
		}
		const response = await getByText(search);
		setJokes(response);
	};


	// handlers a joke from a category 
	const nededFunction = (e) => {
		if (type === "random") {
			getRand(e);
		} else if (type === "selected") {
			getCate(e);
		} else {
			getText(e);
		}
	};



	return (
		<main>
			<h1 className="title">Hey!</h1>
			<h2 className="text">Let`s try to find for you:</h2>
			<form className="form">
{/* //random */}
				<div className="input-joke">
					<input
						type="radio"
						name="jokes"
						id="joke1"
						value="random"
						onChange={(e) => chooseType(e)}
						checked={type === "random"}
					/>
					<label htmlFor="joke1">Random</label>
				</div>
{/* //by category */}
				<div className="input-joke ">
					<input
						type="radio"
						name="jokes"
						id="joke2"
						value="selected"
						onChange={(e) => chooseType(e)}
						checked={type === "selected"}
					/>
					<label htmlFor="joke2">From caterogies</label>
				
					{type === "selected" && categories && (
						<div className="categories ">
							{categories.map((cat, ind) => {
								return (
									<button
										type="button"
										onClick={(e) => changeCategory(e, cat)}
										className={selected === cat ? "selected" : ""}
										key={ind}>
										{cat}
									</button>
								);
							})}
						</div>
					)}
					</div>
				
{/* //by text */}
				<div className="input-joke">
					<input
						type="radio"
						name="jokes"
						id="joke3"
						value="search"
						onChange={(e) => chooseType(e)}
						checked={type === "search"}
					/>
					<label htmlFor="joke3">Search</label> <br />
					{type === "search" && (
						<input className="text__search"
							type="text"
							value={search}
							onChange={(e) =>setSearch(e.target.value)}
							name="joke3"
							placeholder="Type a serch text"
						/>
					)}
				</div>

				<button className="form__btn" onClick={(e) => nededFunction(e)}>Get a joke</button>
			
      </form>
		</main>
	);
};

export default Inputs;
