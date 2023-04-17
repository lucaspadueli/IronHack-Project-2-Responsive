import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import './SingleCharacter.css';


const SingleCharacter = () => {

const {charId} = useParams();
const [character,setCharacter] = useState(null);

useEffect(() => {

axios.get(`https://rickandmortyapi.com/api/character/${charId}`)
.then(response => setCharacter(response.data))
.catch(err=> console.log(err))
},[charId])
 
return (
<div className="single-char-page">
      {!character ? (
        <h3>Loading</h3>
      ) : (
        
        <div className="card" key={character.id}>
          <Link to="/characters-list">
            {" "}
            <button className="btn btn-primary"> Characters List </button>
          </Link>
          <Link to="/">
            {" "}
            <button className="btn btn-primary"> Home Page </button>
          </Link>
          <img
            className="card-img-top"
            src={character.image}
            alt="character"
          />
          <div className="card-body">
            <h2 className="card-title"> {character.name} </h2>
          </div>
          <ul className="list-group list-group-flush list-group-single">
            <li className="list-group-item">
              {" "}
              Species: {character.species}{" "}
            </li>

            <li className="list-group-item"> Gender: {character.gender} </li>
            <li className="list-group-item">
              {" "}
              Origin: {character.origin.name}{" "}
            </li>
            <li className="list-group-item">
              {" "}
              Location: {character.location.name}
            </li>
            <li className="list-group-item"> Status: {character.status}</li>
            <li className="list-group-item">
              {" "}
              Created: {character.created}{" "}
            </li>
          </ul>
        </div>
      )}
    </div>
)

}

export default SingleCharacter;