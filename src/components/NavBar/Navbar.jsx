import { useEffect } from 'react'
import './Navbar.css'
import {Link, useLocation} from 'react-router-dom'



export default function NavBar() {

    let location = useLocation()
    useEffect (() => {
        window.scrollTo()
    }, [location])


    return (
        <nav className="Navbar">
            <Link to="/amenities">
                <img className='arrow_navbar' src="/public/arrow.png" alt="arrow" />
            </Link>
            <Link to="/">
                <img className='logo_navbar' src="/public/logo.png" alt="logo" />
            </Link>
        </nav>
        );
    }


