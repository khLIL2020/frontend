
import React, { useState } from "react";
import MovieCard from "../Components/Moviecard";
import "./styles.css";
import { film } from "./Films";
import datas from './Search'
import searchTerm from './Search'



function Series() {

  
    const produit =[film[0].title,film[1].title,film[2].title,film[3].title,film[4].title]
    const [datas, setDatas] =useState([produit])
    
    // console.log(datas)
    // console.log(searchTerm)
  return (
  <div>

      {
      film.map((item, key) => 
        <ul className="Home" key={key}>
          <MovieCard movie={item} />
        </ul>
      )}
    </div>
  );
}

//.filter((val)=>{
//if(searchTerm==""){
//return val;
//}
//else if (val.movies.toLowerCase().includes(searchTerm.toLowerCase()))
//{
// return val;
//}
//     })

export default Series;
