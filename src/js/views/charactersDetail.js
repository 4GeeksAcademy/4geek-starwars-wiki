import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const urlApi = 'https://www.swapi.tech/api/people/';
const imgUrl = 'https://starwars-visualguide.com/assets/img/characters/';

const CharacterDetail = () => {
  const [character, setCharacter] = useState({});
  const [homeWorld, setHomeWorld] = useState({});
  const [urlApiHomeWorld, setUrlApiHomeWorld] = useState('');
  const params = useParams();

  const getAllelements = async () => {
    const response = await fetch(urlApi + params.id);
    const data = await response.json();
    setCharacter(data.result.properties);
    setUrlApiHomeWorld(data.result.properties.homeworld);

    if (data.result.properties.homeworld) {
      const results = await getHomeWorld(data.result.properties.homeworld);
      setHomeWorld(results);
    }
  };

  const getHomeWorld = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.result.properties;
  };

  console.log('planet url:', urlApiHomeWorld);
  console.log('planet info:', homeWorld);

  useEffect(() => {
    getAllelements();
  }, []);

  return (
    <div className='single-container'>
      <div className='single-card'>
        <img src={imgUrl + params.id + '.jpg'} className='single-card-img' alt='Character Image' />
        <span className='single-card-info'>
          <h1 className=''>
            <strong>{character.name || 'Force loading'}</strong>
          </h1>
          <hr />
          <h3 className=''>Birth Year: {character.birth_year}</h3>
          <h3 className=''>Height: {character.height} cm</h3>
          <h3 className=''>Mass: {character.mass} kg</h3>
          <h3 className='single-card-info-cap'>Gender: {character.gender}</h3>
          <h3 className='single-card-info-cap'>Hair Color: {character.hair_color}</h3>
          <h3 className='single-card-info-cap'>Skin Color: {character.skin_color}</h3>
          <h3 className='single-card-info-cap'>Eye Color: {character.eye_color}</h3>
          <h3 className='single-card-info-cap'>Home World: {homeWorld.name}</h3>
          <hr />
          <Link to='/'>
            <button className='button-50' role='button'>
              Back
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default CharacterDetail;
