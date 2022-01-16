import React, { createRef, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';
import  Image from './Image';
// import { forwardRef ,useEffect } from 'react';



const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
function App() {
  const [data,setData] = useState([]);
  const [search , setSearch] = useState("");
  const inputRef = React.createRef()
 useEffect(()=>{
  inputRef.current.focus()
 },[])
  const handlechange = (e)=>{
    setSearch(e.target.value);
  }
  const getdata =()=>{
  console.log(search)
  axios
  .get(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
  )
  .then(response => {
    setData(response.data.photos.photo)
  })
  .catch(error => {
    console.log(
      "Encountered an error with fetching and parsing data",
      error
    );
})
}

  return (
    <div>
      <center>
        <h2 style={{"background-color" : "grey" , "height":"60px" ,"padding-top" : "20px" , "fontFamily" :"sans-serif" , "color": "goldenrod"}}>IMGAE GALLERY APP </h2>
        <form>
          <input ref={inputRef} style={{"width": "200px" , "height":"30px"}}  type="text"  value = {search} onChange={handlechange}/> <br/> <br/>
          <button style={{"width": "60px" , "height":"30px"}} type="button" name="search" onClick={(e)=>getdata(e)}>Search</button>
        </form> <br />
        {data.length >= 1 ? <Image data = {data} /> : <h1>NO DATA LOADED</h1>}
      </center>
    </div>
  );
}

export default App;
