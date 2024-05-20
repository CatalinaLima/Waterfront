import { useEffect } from 'react'
import './Navbar.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'



export default function NavBar() {

    let location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const handleBackClick = () => {
        navigate(-1);
    };


    return (
        <nav className="Navbar">
            <Link to="/amenities">
                <img className='arrow_navbar' src="/assets/arrow.png" alt="arrow" onClick={handleBackClick} 
                style={{ cursor: 'pointer' }} />
            </Link>
            <Link to="/">
                <img className='logo_navbar' src="/assets/logo.png" alt="logo" />
            </Link>
        </nav>
        );
    }


