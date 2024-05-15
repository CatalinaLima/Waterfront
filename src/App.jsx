import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Amenities from './pages/Amenities'
import AmDetailContainer from './AmDetailContainer/AmDetailContainer'


function App() {


  return (
    <>
          <BrowserRouter>
          {/* <NavBar/> */}
          <Routes>
            <Route path= '/' element= {<Homepage/>} />
            <Route path= '/amenities' element= {<Amenities/>} />
            <Route path= '/amenities/:id' element= {<AmDetailContainer/>} />
          </Routes>
      {/* <Footer/> */}
    </BrowserRouter>

    </>
  )
}

export default App





