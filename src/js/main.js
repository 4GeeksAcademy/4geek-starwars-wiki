import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import injectContext from './store/appContext';

import { Navbar } from './component/navbar';
import CharactersDetail from './views/charactersDetail';
import { Home } from './views/home';
import VehiclesDetail from './views/vehiclesDetail';

//create your first component
const App = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || '';

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/character/:id' element={<CharactersDetail />} />
            <Route path='/vehicle/:id' element={<VehiclesDetail />} />
            <Route path='*' element={<h1>Not found... May the Force be with you.</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(App);
