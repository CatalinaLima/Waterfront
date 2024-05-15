import './AmDetailContainer.css'
import { useParams } from 'react-router-dom';
import amenities from '../data/amenities'; 

function ItemDetailContainer () {

    const { id } = useParams();

    const amenitie = amenities.find((item) => item.id.toString() === id);

    if (!amenitie) {
        return <div>No se encontró la amenitie</div>;
    }

    return (
        <div className="card-detail_main">
            <div className='section11'>
            <div className='infoproject'>
                <h2 className='infoproject2'>{amenitie.title}</h2>
                <h2 className='infoproject2'>{amenitie.img}</h2>
                <h2 className='infoproject2'>{amenitie.quantity}</h2>
            </div>
            </div>
        </div>
    )
    
}

export default ItemDetailContainer