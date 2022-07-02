import React from "react";

function SearchBox({characters}) {

  const characterItems = characters.map((character, index) => {
    return <li key={index} value={index}>{character.name}</li>
  })

  // const locationItems = selected.locations.map((location, index) => {
  //   return <li key={index} value={index}>{location}</li>
  // })

  // const speciesItems = selected.species.map((species, index) => {
  //   return <li key={index} value={index}>{species}</li>
  // })

  return (
    <>
      <h4>Characters</h4>
      <ul>
        {characterItems}
      </ul>

      <h4>Locations</h4>
      <ul>
        {/* {locationItems} */}
      </ul>

      <h4>Species</h4>
      <ul>
        {/* {speciesItems} */}
      </ul>
    </>
  )
}

export default SearchBox;