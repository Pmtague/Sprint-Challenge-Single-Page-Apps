import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default function CharacterCard (props) {
  return (
    <Card.Group>
      <Card>
        <Image src={ props.char.image } wrapped ui={false} />
        <Card.Content>
          <Card.Header>{ props.char.name }</Card.Header>
          <Card.Meta>{ props.char.species } { props.char.status }</Card.Meta>
          <Card.Description>
            Location: { props.char.location.name }
            Origin: { props.char.origin.name }
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  )  
}
