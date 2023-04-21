import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CharactersList.css";
import { useState,useEffect } from "react";
import HeartFavorite from "../Favoritos/HeartFavorite";

function CharactersList() {
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
     try{
     const page1Request = fetch("https://rickandmortyapi.com/api/character");
     const page2Request = fetch(
       "https://rickandmortyapi.com/api/character?page=2"
     );
     const page3Request = fetch(
       "https://rickandmortyapi.com/api/character?page=3"
     );
     const page4Request = fetch(
       "https://rickandmortyapi.com/api/character?page=4"
     );
     const page5Request = fetch(
       "https://rickandmortyapi.com/api/character?page=5"
     );
     const page6Request = fetch(
       "https://rickandmortyapi.com/api/character?page=6"
     );
     const page7Request = fetch(
       "https://rickandmortyapi.com/api/character?page=7"
     );
     const page8Request = fetch(
       "https://rickandmortyapi.com/api/character?page=8"
     );
     const page9Request = fetch(
       "https://rickandmortyapi.com/api/character?page=9"
     );
     const page10Request = fetch(
       "https://rickandmortyapi.com/api/character?page=10"
     );

     const [
       page1Response,
       page2Response,
       page3Response,
       page4Response,
       page5Response,
       page6Response,
       page7Response,
       page8Response,
       page9Response,
       page10Response,
     ] = await Promise.all([
       page1Request,
       page2Request,
       page3Request,
       page4Request,
       page5Request,
       page6Request,
       page7Request,
       page8Request,
       page9Request,
       page10Request,
     ])

     if (!page1Response.ok || !page2Response.ok|| !page3Response.ok|| !page4Response.ok|| !page5Response.ok|| !page6Response.ok|| !page7Response.ok|| !page8Response.ok|| !page9Response.ok|| !page10Response.ok){
      throw new Error ("Character not Found");
     }

     const page1Data = await page1Response.json();
     const page2Data = await page2Response.json();
     const page3Data = await page3Response.json();
     const page4Data = await page4Response.json();
     const page5Data = await page5Response.json();
     const page6Data = await page6Response.json();
     const page7Data = await page7Response.json();
     const page8Data = await page8Response.json();
     const page9Data = await page9Response.json();
     const page10Data = await page10Response.json();
    
     const allCharacters = [...page1Data.results, ...page2Data.results, ...page3Data.results, ...page4Data.results, ...page5Data.results, ...page6Data.results, ...page7Data.results, ...page8Data.results, ...page9Data.results, ...page10Data.results];

     
      setCharacters(allCharacters);
      setFilteredCharacters(allCharacters);
    } catch (err){
      console.log(err);
     }
      
    };
    fetchData();

  }, []); 
  function handleSearch(searchText) {
    if (searchText === "") {
      setFilteredCharacters(characters);
    } else {
      const filtered = characters.filter((character) =>
        character.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredCharacters(filtered);
    }
  }
  
  function handleSearchTextChange(event) {
    const text = event.target.value;
    setSearchText(text);
    handleSearch(text);
  }

  function handleCategoryChange(e) {
    const selectedCategory = e.target.value;
    let charactersToFilter = [...characters];

    if (selectedCategory.toLowerCase() === "human") {
      var filteredSpecies = charactersToFilter.filter(
        (character) => character.species.toLowerCase() === "human"
      );
    } else if (selectedCategory.toLowerCase() === "alien") {
      filteredSpecies = charactersToFilter.filter(
        (character) => character.species.toLowerCase() === "alien"
      );
    } else if (selectedCategory.toLowerCase() === "others") {
      filteredSpecies = charactersToFilter.filter(
        (character) =>
          character.species.toLowerCase() !== "alien" &&
          character.species.toLowerCase() !== "human"
      );
    } else if (selectedCategory.toLowerCase() === "all") {
      filteredSpecies = characters;
    }

    setFilteredCharacters(filteredSpecies);
  }
  return (
    <div className="characters-container">
      <div className="list-header">
        <h2 id="list-h2"> List of Characters: </h2>

        <Link to="/">
          {" "}
          <button id="btn-list-page"> Home Page </button>{" "}
        </Link>
      </div>

      <div>
        <label id="search-label">
          Search:
          <input
            className="search-input"
            type="text"
            name="search"
            value={searchText}
            onChange={handleSearchTextChange}
          />
        </label>

        <div className="form-row align-items-center">
          <div className="col-auto my-1">
            <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
              Sort by:
            </label>
            <select
              className="custom-select mr-sm-2"
              id="inlineFormCustomSelect"
              onChange={handleCategoryChange}
            >
              
              <option value="all"> All </option>
              <option value="human">Humans</option>
              <option value="alien">Aliens</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
      </div>

      <ul className="list-group c-list">
        {!filteredCharacters.length ? (
          <div> Loading... </div>
        ) : (
          filteredCharacters.map((character) => {
            return (
              <div key={character.id} className="container-chars">
                <div className="char-content">
                  <li
                    key={character.id}
                    className="list-group-item list-group-item-success"
                  >
                    {" "}
                    <div className="characters-info">
                      <img
                        className="char-pic"
                        src={character.image}
                        alt={`${character.name}`}
                      />
                      <h4> {character.name} </h4>
                      <p> Species: {character.species}</p>
                      <Link to={`/characters-list/${character.id}`}>
                        {" "}
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-bs-toggle="button"
                        >
                          <span>Show {character.name} </span> <span> Info</span>
                        </button>{" "}
                      </Link>
                    </div>
                    <div>
                      <HeartFavorite />
                    </div>
                  </li>
                </div>
              </div>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default CharactersList;
