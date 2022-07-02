import React from "react";

function GhibliCard({selected}) {
  return (
    <>
      <h2>{selected.original_title}</h2>
      <h3>{selected.original_title_romanised}</h3>
      <h3>{selected.title}</h3>
      <p>{selected.description}</p>
      <img src={selected.image} />
      {/* <img src={selected.movie_banner}/> */}
    </>
  ) 
}

export default GhibliCard;