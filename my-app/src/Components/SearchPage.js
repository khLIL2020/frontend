import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CountryList from './CountryList';
import {movies} from './Films'



const SearchPage = (props) => {
  
  const {keyword} = props;

  const [input, setInput] = useState();
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();


  const fetchData = async () => {
    return setCountryList(movies.title) ,setCountryListDefault(movies.title)
        
      
    
 }
  const updateInput = async (input) => {
     const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput();
     setCountryList(filtered);
  }

  useEffect( () => {fetchData()},[]);

 
  return (
    <>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <CountryList countryList={countryList}/>
    </>
   );
}
export default SearchPage;