import axios from "axios";
import { useState } from "react";
// "https://api.chucknorris.io/jokes/random?category={category}"
// "https://api.chucknorris.io/jokes/categories"
const Category = ( ) => {
  const [joke, setJoke] = useState("");
  const [category, setCategory] = useState("dev");

  const categories = [
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel",
  ];

  const getJokeByCategory = (category) => {
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((res) => {
        setJoke(res.data.value);
      })
     
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleGetJokeClick = () => {
    getJokeByCategory(category);
  };

  return (
    <>
      <label htmlFor="category-select">Select a category:</label>
      <input type="radio" name="input" />
      <select id="category-select" value={category} onChange={handleCategoryChange}>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <button type="button" onClick={handleGetJokeClick}>
        Get a joke
      </button>
      <p>{joke}</p>
    </>
  );
};

export default Category;