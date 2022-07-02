import React from "react";
import GhibliCard from "./GhibliCard";
import SearchBox from "./SearchBox";

function GhibiliInfo({selected, characters}) {
  return (
    <>
      <GhibliCard selected={selected}/>
      <SearchBox selected={selected} characters={characters}/>
    </>
  ) 
}

export default GhibiliInfo;