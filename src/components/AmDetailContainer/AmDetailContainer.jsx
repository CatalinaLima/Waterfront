import './AmDetailContainer.css'
import { useParams } from 'react-router-dom';


import { useAmenities } from '../../context/amenitiesContext';

function AmDetailContainer () {
    const { amenities, setAmenities } = useAmenities();
    const { id } = useParams();
    const amenitie = amenities.find((item) => item.id.toString() === id);

    const increaseQuantity = () => {
        setAmenities(prevAmenities => 
            prevAmenities.map(item => 
                item.id === amenitie.id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = () => {
        if (amenitie.quantity > 0) {
            setAmenities(prevAmenities => 
                prevAmenities.map(item => 
                    item.id === amenitie.id ? { ...item, quantity: item.quantity - 1 } : item
                )
            );
        }
    };

    if (!amenitie) {
        return <div>No se encontró la amenitie</div>;
    }

    return (
        <>
            <div className='amenities_container'>
                <div className='info_container'>
                    <h1 className='title'>{amenitie.title}</h1>
                    <p className='paragraph'>{amenitie.description}</p>
                    <img className='amenities_img' src={amenitie.img} alt="" />
                </div>
                <div className='buttons'>
                    <button className='button' onClick={increaseQuantity}>IM HERE!</button>
                    <button className='button' onClick={decreaseQuantity}>IM NOT HERE ANYMORE!</button>
                </div>
            </div>
        </>
    )
    
}

export default AmDetailContainer


