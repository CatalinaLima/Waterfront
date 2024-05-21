import { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../data/firebaseConfig';

const AmenitiesContext = createContext();

export const useAmenities = () => useContext(AmenitiesContext);

export const AmenitiesProvider = ({ children }) => {
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    const fetchAmenities = async () => {
      const querySnapshot = await getDocs(collection(db, 'amenities'));
      const amenitiesData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setAmenities(amenitiesData);
    };
    fetchAmenities();
  }, []);

  const increaseQuantity = async (id) => {
    const amenityRef = doc(db, 'amenities', id);
    await updateDoc(amenityRef, {
      quantity: increment(1),
    });
    setAmenities(prevAmenities =>
      prevAmenities.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = async (id) => {
    const amenityRef = doc(db, 'amenities', id);
    await updateDoc(amenityRef, {
      quantity: increment(-1),
    });
    setAmenities(prevAmenities =>
      prevAmenities.map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  return (
    <AmenitiesContext.Provider value={{ amenities, increaseQuantity, decreaseQuantity }}>
      {children}
    </AmenitiesContext.Provider>
  );
};




