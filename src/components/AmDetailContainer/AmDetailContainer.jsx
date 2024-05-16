import './AmDetailContainer.css'
import { useParams } from 'react-router-dom';
import amenities from '../../data/amenities'; 

import { useState } from 'react';

function AmDetailContainer () {

    const { id } = useParams();

    const amenitie = amenities.find((item) => item.id.toString() === id);

     // Estado local para la cantidad
     const [quantity, setQuantity] = useState(amenitie.quantity);

     // Función para aumentar la cantidad
     const increaseQuantity = () => {
         setQuantity(quantity + 1);
     }
 
     // Función para disminuir la cantidad
     const decreaseQuantity = () => {
         if (quantity > 0) {
             setQuantity(quantity - 1);
         }
     }

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
                <p className='quantity_display'>Quantity: {quantity}</p> 
            </div>
        </>
    )
    
}

export default AmDetailContainer


