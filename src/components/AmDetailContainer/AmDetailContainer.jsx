import { useState } from 'react';
import './AmDetailContainer.css';
import { useParams } from 'react-router-dom';
import { useAmenities } from '../../context/amenitiesContext';

function AmDetailContainer() {
    const { amenities, increaseQuantity, decreaseQuantity } = useAmenities();
    const { id } = useParams();
    const amenitie = amenities.find((item) => item.id === id);

    const [activeButton, setActiveButton] = useState(null);

    if (!amenitie) {
        return <div>No se encontró la amenitie</div>;
    }

    const handleIncrease = () => {
        increaseQuantity(amenitie.id);
        setActiveButton('increase');
    };

    const handleDecrease = () => {
        decreaseQuantity(amenitie.id);
        setActiveButton('decrease');
    };

    return (
        <div className='amenities_container'>
            <div className='info_container'>
                <h1 className='title_adc'>{amenitie.title}</h1>
                <p className='paragraph_adc'>{amenitie.description}</p>
                <img className='amenities_img' src={amenitie.img} alt={amenitie.title} />
            </div>
            <div className='buttons'>
                <button 
                    className={`button ${activeButton === 'increase' ? 'active' : ''}`} 
                    onClick={handleIncrease}
                >
                    IM HERE!
                </button>
                <button 
                    className={`button ${activeButton === 'decrease' ? 'active' : ''}`} 
                    onClick={handleDecrease}
                >
                    IM NOT HERE ANYMORE!
                </button>
            </div>
        </div>
    );
}

export default AmDetailContainer;



