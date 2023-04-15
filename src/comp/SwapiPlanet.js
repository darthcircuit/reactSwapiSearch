export default function SwapiPlanet(props) {

  return (

    <div className="planet-wrapper">

<h2>{props.planet.name}</h2>

<div className="planet-info-wrapper">
  <p>Climate: {props.planet.climate}</p>
  <p>Day Length: {props.planet.rotation_period} Hours</p>
  <p>Year Length: {props.planet.orbital_period} Days</p>
  <p>Population: {props.planet.population}</p>
</div>
</div>
    )
}