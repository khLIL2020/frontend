import { render } from "@testing-library/react";
import { Card,Button } from 'react-bootstrap';
import React, { Component } from 'react';
import {useParams} from "react-router-dom";
import {film} from './Films'
import Categorie from './Categorie'


const Categoriemaper = () => {

  
   
    const { type } = useParams();
    console.log(type)
     const myfilms = film.filter(movie =>movie.type===type);

  
    render()
    {
      return(
  
        <div>
          {myfilms.map((item,key) =>
        <ul key={key}> 
          <Categorie movie={item}/>
  
           </ul>
   
              
        )}  
       
      
        </div>
      )}
      }
   export default Categoriemaper;
  