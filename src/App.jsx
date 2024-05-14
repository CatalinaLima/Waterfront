import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Amenities from './pages/Amenities'


function App() {


  return (
    <>
          <BrowserRouter>
          {/* <NavBar/> */}
          <Routes>
            <Route path= '/' element= {<Homepage/>} />
            <Route path= '/amenities' element= {<Amenities/>} />
            {/* <Route path= '/product/:id' element= {<ItemDetailContainer/>} />
            <Route path= '/servicios' element= {<Servicios/>} />
            <Route path= '/estudio' element= {<Estudio/>} />
            <Route path= '/contacto' element= {<Contact/>} /> */}
          </Routes>
      {/* <Footer/> */}
    </BrowserRouter>

    </>
  )
}

export default App





