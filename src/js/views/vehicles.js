import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import { InfoCard } from './infoCard';

const urlApiVehicle = 'https://www.swapi.tech/api/vehicles';
const imgUrl = 'https://starwars-visualguide.com/assets/img/vehicles/';

const Vehicles = () => {
  const [vehicle, setVehicle] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState('?page=1&limit=10');

  const { store, actions } = useContext(Context);

  // Metodo async/await
  const getAllelements = async () => {
    const response = await fetch(urlApiVehicle + currentPage);
    const data = await response.json();
    setTotalPages([...Array(data.total_pages).keys()]);

    const promises = data.results.map(async (element) => {
      const response = await fetch(element.url);
      const data = await response.json();
      return data.result;
    });
    const results = await Promise.all(promises);
    setVehicle(results);
  };

  useEffect(() => {
    getAllelements();
  }, [currentPage]);

  const handleButtonPage = (page) => {
    setCurrentPage(`?page=${page}&limit=10`);
  };

  return (
    <div className='vehicles-container my-4'>
      <div className='button-container mx-2'>
        <span className='button-50 mx-2' style={{ cursor: 'default' }}>
          VEHICLES
        </span>
        {totalPages.map((_, ind) => (
          <button
            className='button-50'
            role='button'
            key={ind}
            value={ind + 1}
            onClick={(e) => handleButtonPage(e.target.value)}
          >
            {ind + 1}
          </button>
        ))}
      </div>
      <div className='container-fluid d-flex flex-wrap'>
        {vehicle.map((itm, ind) => (
          <div key={ind} className='vehicles-card-container'>
            <Link to={`vehicle/${itm.uid}`} className='card-link'>
              <InfoCard uid={itm.uid} name={itm.properties.name}>
                <div className='container'>
                  <p>{itm.properties.name}</p>
                </div>
              </InfoCard>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
