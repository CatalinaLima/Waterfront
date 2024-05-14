import './Amenities.css'
import amenities from '../data/amenities'

function Amenities() {
  return (
    <>
    <div className='amenities_container'>
        <h1 className='title'>AMENITIES</h1>
        <p className='paragraph'>You can now check availability before showing up. Organize your plans!</p>
    </div>
    <div className='amenities_icons'>
        {amenities.map((item) => (
          <div key={item.id}/>
        ))}
      </div>
    </>
  )
}

export default Amenities
