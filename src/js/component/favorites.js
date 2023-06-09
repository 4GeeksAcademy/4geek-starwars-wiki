import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Favorites = () => {
  const { store, actions } = useContext(Context);

  /*   const [characters1, setChacters1] = useState(store.characters); //no guarda la info
  console.log('char nav:', characters1); */

  const handleDelFav = (uid, name) => {
    actions.removeFromFavorites(uid, name);
  };

  return (
    <div>
      <div className='nav-dropDown'>
        <button
          className='button-favorites nav-link dropdown-toggle'
          role='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          Favorites ({store.characters.length})
        </button>
        {store.characters.length === 0 ? (
          <ul className='dropdown-menu rounded-0'>
            <li className='dropdown-item'>Empty List</li>
          </ul>
        ) : (
          <ul className='dropdown-menu rounded-0'>
            {store.characters.map((itm, ind) => (
              <li key={ind}>
                <span className='dropdown-item d-flex justify-content-between'>
                  <Link to={`character/${itm.uid}`}>
                    <span>{itm.name}</span>
                  </Link>
                  <span className=''>
                    <i
                      className='fa-solid fa-delete-left'
                      style={{ marginLeft: '5px' }}
                      onClick={() => handleDelFav(itm.uid, itm.name)}
                    />
                  </span>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Favorites;
