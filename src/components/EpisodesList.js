import React, { useEffect, useState } from 'react';
import axios from 'axios'
import EpisodeCard from './EpisodeCard';

export default function EpisodesList() {
    const [episodeData, setEpisodeData] = useState([]);

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/episode/')

            .then(res => {
                console.log('Episode Results', res.data.results)
                setEpisodeData(res.data.results)
            })

            .catch(err => {
                console.log('Error caught!', err)
            })
    }, [])

    console.log('Set Episode Data', episodeData)

    return (
        <section className='episode-list grid-view'>
            <h2>
                { episodeData.map(episode => {
                    return <EpisodeCard key={ episode.name } episode={ episode } />;
                })}
            </h2>
        </section>
    )
}