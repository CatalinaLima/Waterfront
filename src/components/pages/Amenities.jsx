import { Link } from 'react-router-dom';
import amenities from '../../data/amenities';
import './Amenities.css'

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
                <img className='icon' src={item.icon} alt={item.title} />
                <p className='item_title'>{item.title}</p>
                {/* Mostrar la cantidad pasada como prop */}
                <p className='item_quantity'>Q: {}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}


export default Amenities;






