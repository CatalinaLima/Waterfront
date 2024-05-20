
import './AmDetailContainer.css'
import { useParams } from 'react-router-dom';


import { useAmenities } from '../../context/amenitiesContext';
import { useState } from 'react';

function AmDetailContainer () {
    const { amenities, setAmenities } = useAmenities();
    const { id } = useParams();
    const amenitie = amenities.find((item) => item.id.toString() === id);

    const [activeButton, setActiveButton] = useState(null);

    const increaseQuantity = () => {
        setAmenities(prevAmenities => 
            prevAmenities.map(item => 
                item.id === amenitie.id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
        setActiveButton('increase');
    };

    const decreaseQuantity = () => {
        if (amenitie.quantity > 0) {
            setAmenities(prevAmenities => 
                prevAmenities.map(item => 
                    item.id === amenitie.id ? { ...item, quantity: item.quantity - 1 } : item
                )
            );
            setActiveButton('decrease');
        }
    };

    if (!amenitie) {
        return <div>No se encontró la amenitie</div>;
    }

    return (
        <>
            <div className='amenities_container'>
                <div className='info_container'>
                    <h1 className='title_adc'>{amenitie.title}</h1>
                    <p className='paragraph_adc'>{amenitie.description}</p>
                    <img className='amenities_img' src={amenitie.img} alt="" />
                </div>
                <div className='buttons'>
                <button 
                    className={`button ${activeButton === 'increase' ? 'active' : ''}`} 
                    onClick={increaseQuantity}
                >
                    IM HERE!
                </button>
                <button 
                    className={`button ${activeButton === 'decrease' ? 'active' : ''}`} 
                    onClick={decreaseQuantity}
                >
                    IM NOT HERE ANYMORE!
                </button>
            </div>

            </div>
        </>
    )
    
}

export default AmDetailContainer


