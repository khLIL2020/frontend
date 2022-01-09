import React, { useState, useEffect } from 'react';
import SearchPage from './SearchPage';

const SearchBar = (props) => {

  const [keyword ,setKeyword]=useState()
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};


  return (
    <div>
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search a movie"}
     onChange={(e) => setKeyword(e.target.value)} />
 
     </div>
  );
  
}


export default SearchBar