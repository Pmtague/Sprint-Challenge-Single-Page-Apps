import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  const [charData, setCharData] = useState([]);

  useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/character/')

        .then(res => {
          // console.log('Results', res.data.results)
          setCharData(res.data.results)
        })

        .catch(err => {
          console.log('Error caught!', err)
        })
  }, [])

  console.log('Set Char Data', charData)

  return (
    <section className='character-list grid-view'>

      <h2>{ charData.map(char => {
        return <CharacterCard key={ char.name } char={ char } />;
      })}
      </h2>

    </section>
  )
}
