import React, {useEffect, useState} from "react";
import GhibiliInfo from "../components/GhibliInfo";
import GhiblieTitle from "../components/GhibliTitle";

function GhibliContainer() {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({title: 'Castle In The Sky', original_title: '天空の城ラピュタ'});
  const [characters, setCharacters] = useState([]);

  async function getGhibliMovies() {
    const res = await fetch('https://ghibliapi.herokuapp.com/films');
    const data = await res.json();
    setMovies(data);
    setSelectedMovie(data[0]);
  };

  async function getGhibliCharacter(character) {
    const res = await fetch(character);
    const data = await res.json();
    setCharacters(data);
  };

  function selectedMovieCharacters() {
    const movieCharacters = selectedMovie.people.map((character) => {
      return getGhibliCharacter(character);
    });
    return setCharacters(movieCharacters);
  }

  useEffect(() => {
    getGhibliMovies();
  }, []);

  // useEffect(() => {
  //   selectedMovieCharacters()
  // }, [movies])

  return (
    <>
      <GhiblieTitle selected={selectedMovie} movies={movies} onMovieSelected={setSelectedMovie} />
      <GhibiliInfo characters={characters} selected={selectedMovie}/>
    </>
  ) 
}

export default GhibliContainer;