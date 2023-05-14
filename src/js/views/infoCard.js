import React, { useContext } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { Context } from '../store/appContext';

const urlApiPeople = 'https://www.swapi.tech/api/people';
const imgUrl = 'https://starwars-visualguide.com/assets/img/characters/';

export const InfoCard = ({ children, uid, name }) => {
  const { store, actions } = useContext(Context);

  const handleAddFav = (e, uid, name) => {
    e.preventDefault();
    actions.addToFavorites(uid, name);
  };

  return (
    <div className='card m-2' style={{ width: '18rem' }}>
      <img src={`${imgUrl}${uid}.jpg`} className='card-img-top' alt='' />
      <div className='card-body'>
        <div className='container d-flex justify-content-between'>
          {children}
          <span className='card-favIcon'>
            {store.characters.some(
              (character) => character.uid === uid && character.name === name
            ) ? (
              <MdFavorite onClick={(e) => handleAddFav(e, uid, name)} />
            ) : (
              <MdFavoriteBorder onClick={(e) => handleAddFav(e, uid, name)} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
