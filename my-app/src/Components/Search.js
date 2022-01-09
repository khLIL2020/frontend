import "./styles.css";
import React from 'react';
import {useState,useEffect} from 'react';
import {film} from './Films'
import Movielist from "../Components/Movielist";
import axios from 'axios'
function Search(){


    const [searchTerm,setSearchTerm] =useState('')
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
const handleSearchTerm =(e)=> {
    
    var value =e.target.value
   
 setSearchTerm(value)
console.log(searchTerm)
const res =  axios.get(`http://localhost:3000/nom/0/${searchTerm}`, { nom: {searchTerm}}).then((value)=>{
  // const pseudo=value;
  console.log(value)


});

}
    
    return (
       <div>
        
       <div>
            <input type="text"
            name="searchBar" id="searchBar" placeholder="Votre nom"onChange={handleSearchTerm}/>
        </div>

        <div className='search_results'>

<div className="search_result"></div>
        </div>
        </div>  
    )
}

export default Search;