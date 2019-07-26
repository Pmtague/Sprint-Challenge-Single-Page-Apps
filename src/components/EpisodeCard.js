import React from 'react';
import { Card } from 'semantic-ui-react'

export default function EpisodeCard (props) {
    return (
        <Card.Group>
            <Card>
                <Card.Content>
                    <Card.Header>{ props.episode.name }</Card.Header>
                    <Card.Meta>Episode: { props.episode.episode }</Card.Meta>
                    <Card.Description>
                        Aired: { props.episode.air_date }
                    </Card.Description>
                </Card.Content>
            </Card>
        </Card.Group>
    )
}