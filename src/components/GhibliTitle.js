import React from "react";

function GhibliTitle({selected, movies, onMovieSelected}) {

  function onChange(evt) {
    const index = evt.target.value;
    const movie = movies[index];
    onMovieSelected(movie);
  }

  const movieOptions = movies.map((movie, index) => {
    return <option key={movie.id} value={index}>{movie.title}</option>
  })

  return (
    <>
      <h1>スタジオジブリ作品</h1>
      <h3>An API project</h3>
      <p>Choose your movie to start:</p>
      <select onChange={onChange}>
        {movieOptions}
      </select>
    </>
) 
}

export default GhibliTitle;