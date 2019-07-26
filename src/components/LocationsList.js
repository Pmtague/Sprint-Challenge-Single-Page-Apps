import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard.js';

export default function LocationsList() {
    const [locationData, setLocationData] = useState([]);

    useEffect( () => {
        axios
            .get('https://rickandmortyapi.com/api/location/')

            .then(res => {
                // console.log(res.data.results)
                setLocationData(res.data.results)
            })

            .catch(err => {
                console.log('Error caught!', err)
            })
    }, [])
    console.log('Set Location Data', locationData)

    return (
        <section className='location-list grid-view'>
            <h2>
                { locationData.map(location => {
                    return <LocationCard key={ location.name } location={ location } />;
                })}
            </h2>
        </section>
    )
}
