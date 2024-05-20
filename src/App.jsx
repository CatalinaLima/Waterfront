import './App.css'

import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'

import Homepage from './components/pages/Homepage'
import Amenities from './components/pages/Amenities'
import AmDetailContainer from './components/AmDetailContainer/AmDetailContainer'
import NavBar from './components/NavBar/Navbar'

import { AmenitiesProvider } from './context/amenitiesContext';
import amenitiesData from '../src/data/amenities';

function App() {
  return (
    <AmenitiesProvider amenitiesData={amenitiesData}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </AmenitiesProvider>
  );
}

function Main() {
  const location = useLocation();
  const hideNavBar = location.pathname === '/';

  return (
    <>
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/amenities' element={<Amenities />} />
        <Route path='/amenities/:id' element={<AmDetailContainer />} />
      </Routes>
    </>
  );
}

export default App;











