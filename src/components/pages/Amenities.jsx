import { Link } from 'react-router-dom';

import './Amenities.css'

import { useAmenities } from '../../context/amenitiesContext';

function Amenities() {
  const { amenities } = useAmenities();

  return (
      <>
          <div className='amenities_container'>
              <h1 className='title'>AMENITIES</h1>
              <p className='paragraph'>You can now check availability before showing up. Organize your plans!</p>
              <h2 className='h2_a'>HOW MANY PEOPLE?</h2>
              <div className='amenities_icons'>
                  {amenities.map((item) => (
                      <Link key={item.id} to={`/amenities/${item.id}`}>
                          <div className='icons'>
                              <img className='icon' src={item.icon} alt={item.title} />
                              {/* <p className='item_title'>{item.title}</p> */}
                              <p className='item_quantity'>{item.quantity}</p>
                          </div>
                      </Link>
                  ))}
              </div>
          </div>
      </>
  );
}

export default Amenities;




