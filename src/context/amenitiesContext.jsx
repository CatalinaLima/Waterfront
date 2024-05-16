import { createContext, useState, useContext } from 'react';

const AmenitiesContext = createContext();

export const useAmenities = () => useContext(AmenitiesContext);

export const AmenitiesProvider = ({ children, amenitiesData }) => {
  const [amenitiesDataState, setAmenitiesData] = useState(amenitiesData);

  return (
    <AmenitiesContext.Provider value={{ amenitiesData: amenitiesDataState, setAmenitiesData }}>
      {children}
    </AmenitiesContext.Provider>
  );
};



