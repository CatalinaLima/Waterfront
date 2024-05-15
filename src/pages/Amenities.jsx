import './Amenities.css'
import amenities from '../data/amenities'

import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

function Amenities() {
  return (
    <>
      <div className='amenities_container'>
        <h1 className='title'>AMENITIES</h1>
        <p className='paragraph'>You can now check availability before showing up. Organize your plans!</p>
        <div className='amenities_icons'>
          {amenities.map((item) => (
            <Link key={item.id} to={`/amenities/${item.id}`}>
              <div className='icons'>
                <img className='icon' src={item.img} alt={item.title} />
                <p className='item_title'>{item.title} {item.quantity}</p>
                <p className='item_quantity'>{item.quantity}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Amenities;

