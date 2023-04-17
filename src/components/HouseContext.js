import { type } from '@testing-library/user-event/dist/type';
import React, { useState, useEffect, createContext } from 'react';
import { housesData } from '../data'

export const HouseContext = createContext();
const HouseContextProvidor = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (Any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("property type (Any)")
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price Range (Any)");
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const allCountries = houses.map((house)=>{
      return house.country;
    })

    const uniqueCountries = ['Location (Any)', ...new Set(allCountries)]
    setCountries(uniqueCountries);
  }, []);

  useEffect(()=>{
    const allProperties = houses.map((house)=>{
      return house.type;
    })
    const uniqueProperty = ['Property Type (Any)', ...new Set(allProperties)]
    setProperties(uniqueProperty);
  }, [])

  const handleClick =()=>{
    setLoading(true);
    const isDefault= (str)=>{
      return str.split(' ').includes('(Any)');
    }
      
      const minPrice = parseInt(price.split(' ')[0]);
      const maxPrice = parseInt(price.split(' ')[2]);

      const newHouse = housesData.filter((house)=>{
        
        if (parseInt(house.price) >= minPrice && parseInt(house.price) <= maxPrice && house.country == country && house.type == property){
          return house;

        }
        
        if (isDefault(country)&& isDefault(property)&& isDefault(price)){
          return house;
        }

        if (!isDefault(country) && isDefault(property) && isDefault(price)) {
          if(house.country === country){
            return house;
          }
        }
        if (isDefault(country) && !isDefault(property) && isDefault(price)) {
          if(house.type === property){
            return house;
          }
          
        }
        if (isDefault(country) && isDefault(property) && !isDefault(price)) {
          
          if(house.price >= minPrice && house.price <= maxPrice){
            return house;
          }
        }
        if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
          
          if(house.country === country && house.type === property){
            return house;
          }
        }
        if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
          
          if (house.country === country && house.price >= minPrice && house.price <= maxPrice){
            return house;
          }
        }
        if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
          
          if (house.type === property && house.price >= minPrice && house.price <= maxPrice){
            return house;
          }
        }
        
      })

      setTimeout(()=>{
        return newHouse.lenght < 1 ? setHouses([]): setHouses(newHouse),
        setLoading(false)
      }, 1000)

      
      
  }
  return <HouseContext.Provider value={{
    country,
    setCountry,
    countries,
    property,
    setProperty,
    properties,
    price,
    setPrice,
    houses,
    handleClick,
    loading,
  }}>{children}</HouseContext.Provider>;
};

export default HouseContextProvidor;
