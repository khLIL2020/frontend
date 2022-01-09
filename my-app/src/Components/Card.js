
import React, { useState,useEffect } from "react";
import TheCard from "../Components/TheCard";
import "./styles.css";
import datas from './Search'
import searchTerm from './Search'
import axios from 'axios';



function Card() {

    const [posts,setPosts]=useState([])
    useEffect(() => {
  
      fetchPosts();
    }, [])
  
    const fetchPosts = async () => {
      try {
        const response =  axios.get('http://localhost:3000').then((value)=>{
        setPosts(value.data.people);
      console.log(value)
  
      });
  
        // console.log(response)
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range 
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    
const data=[]
for(var i in posts) {
    data.push(posts[i]);
}
console.log(data)
  return (
  <div>

{
      data.map((item, key) => 
        <ul key={key}>
          <TheCard movie={item} />
        </ul>
      )}
    </div>
  )}


//.filter((val)=>{
//if(searchTerm==""){
//return val;
//}
//else if (val.movies.toLowerCase().includes(searchTerm.toLowerCase()))
//{
// return val;
//}
//     })


export default Card;