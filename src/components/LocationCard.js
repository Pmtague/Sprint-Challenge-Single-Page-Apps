import React from 'react'

export default function LocationCard (props) {
  // image={image}
  return (
    <div>
      <p>{ props.location.name }</p>
      <p>Type: { props.location.type }</p>
      <p>Dimension: { props.location.dimension }</p>
      <p>URL: { props.location.url}</p>
    </div>
  )
}
