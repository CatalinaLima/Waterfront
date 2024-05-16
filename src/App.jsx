import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Homepage from './components/pages/Homepage'
import Amenities from './components/pages/Amenities'
import AmDetailContainer from './components/AmDetailContainer/AmDetailContainer'
import NavBar from './components/NavBar/Navbar'

import { AmenitiesProvider } from './context/amenitiesContext';

function App() {
  return (
    <AmenitiesProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/amenities' element={<Amenities />} />
          <Route path='/amenities/:id' element={<AmDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </AmenitiesProvider>
  );
}

export default App;








