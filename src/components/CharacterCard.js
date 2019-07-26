import React from 'react'

export default function CharacterCard (props) {
  return (
    <div>
      <p>{ props.char.name }</p>
      <p>Status: { props.char.status }</p>
      <p>Species: { props.char.species }</p>
      <p>Location: { props.char.location.name }</p>
      <p>Origin: { props.char.origin.name }</p>
    </div>
  )  
}
