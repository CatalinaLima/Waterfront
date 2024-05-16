// amenitiesContext.js
import { createContext, useState, useContext } from 'react';

const AmenitiesContext = createContext();

export const useAmenities = () => useContext(AmenitiesContext);

export const AmenitiesProvider = ({ children, amenitiesData }) => {
  const [amenities, setAmenities] = useState(amenitiesData);

  return (
    <AmenitiesContext.Provider value={{ amenities, setAmenities }}>
      {children}
    </AmenitiesContext.Provider>
  );
};



