import { useState } from 'react'

import SwapiPerson from './SwapiPerson'

export default function SwapiLanding() {
  const [id, setId] = useState('')
  const [person, setPerson] = useState()
  const [toggle, setToggle] = useState(false)
  const [invalid, setInvalid] = useState(false)

  function fetchPerson(personId) {
    fetch(`https://swapi.tech/api/people/${personId}`) 
    .then((res) => res.json())
    .then((data) => setPerson(data.result.properties))
    .catch((err) => {
      console.error("Failed to fetch person: "+err)
      setInvalid(true) 
    })
    .finally(() => {
      setToggle(false)
    })
  }


  function handleSubmit(e) {
    e.preventDefault() 
    setToggle(true)
    fetchPerson(id)
  }
  return (

  <form onSubmit={handleSubmit}>

    <h1>Enter an ID:</h1>

    <input id="input" type='text' onChange={(e) => {
      setId(e.target.value)
      setInvalid(false)
      setPerson(null)
    } 
      
      
      }/>

    <button disabled={toggle? true :false }>Get Character!</button>

    <br/>
    {person?  <SwapiPerson person={person} /> : invalid? `There is no user with the ID of ${id}. Please try another ID.` : null}

  </form>

  )
}