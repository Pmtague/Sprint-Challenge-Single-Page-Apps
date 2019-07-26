import React from 'react';

export default function EpisodeCard (props) {
    return (
        <div>
            <p>{ props.episode.name }</p>
            <p> Air Date: { props.episode.air_date }</p>
            <p>Episode: { props.episode.episode }</p>
            <p>URL: { props.episode.url }</p>
        </div>
    )
}