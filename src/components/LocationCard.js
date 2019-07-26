import React from 'react'
import { Card } from 'semantic-ui-react';

export default function LocationCard (props) {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Card.Header>{ props.location.name }</Card.Header>
          <Card.Meta>Type: { props.location.type }</Card.Meta>
          <Card.Description>Dimension: { props.location.dimension }</Card.Description>
          <Card.Content extra>
            Residents: { props.location.residents.length }
          </Card.Content>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}
