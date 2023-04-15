/* 
Homework 4/11/2023 - Due tomorrow

Build a basic router where you can navigate to a "Swapi" component.
Your "Swapi" component should fetch some data from any person of
 your choosing. Render at least 3 data points on the dom.
It should also include a button that will fetch on click that person's home
planet information. Render the homeworld's name on the dom as well, but 
set it conditionally so that it doesn't display if it doesn't exist.

This should properly cleanup any asynchronous behavior when navigating away
from the component.

Try this with classes first, then refactor using hooks.
*/
import { useEffect, useState } from "react"
import SwapiPlanet from "./SwapiPlanet"
export default function SwapiPerson(props) {
  const [planet, setPlanet] = useState({})
  
  const person = props.person
  useEffect(() => {
    setPlanet({})
  }, [])

  function handleClick(e) {
    e.preventDefault()
    if (!planet.name) {
      fetch(person.homeworld)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result.properties)
        setPlanet(data.result.properties)
      })
      .catch((err) => console.error("Failed to fetch Homeworld: " + err))
    }
  }

  return (
<>

    <div className="person-wrapper">

    <h1>
      {person.name}
    </h1>

    <div className="person-info-wrapper">
      <p>Birth Year: {person.birth_year}</p>
      <p>Gender: {person.gender[0].toUpperCase()}</p>
      <p>Hair Color: {person.hair_color[0].toUpperCase() + person.hair_color.slice(1,person.hair_color.length)}</p>
    </div>

      <button onClick={handleClick} disabled={planet.name? true : false}>Get Home Planet Info</button>

      {planet.name?  <SwapiPlanet planet={planet} /> : null}


  </div>
</>
  )
}
