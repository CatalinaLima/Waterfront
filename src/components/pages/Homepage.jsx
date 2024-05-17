import { Link } from 'react-router-dom';
import './Homepage.css';


function Homepage() {

  return (
    <>
    <div className='hp_container'>
        <img className='logo' src="/public/assets/logo.png" alt="logo" />
        <Link to = '/amenities' >
        <img className='arrow3' src="/public/assets/arrowsx3.png" alt="arrow" />
        </Link>
    </div>
    </>
  );
}

export default Homepage;