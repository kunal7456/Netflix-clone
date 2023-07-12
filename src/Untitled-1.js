import React, {useState,useEffect} from 'react'
import axios from './axios';
function Row({title,fetchURL}) {
  const [movies,setMovies] = useState([]) ; 

  useEffect(() =>{
     async function fetchData(){
        const request = await axios.get(fetchURL);
        setMovies(request.data.results);
        console.log(request.data.results);
        return request;
     }
     fetchData();
  }
  ,[fetchURL]);
//   console.log(movies);
if (movies.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__poster">

        {/* {movies.map(movie =>(
        <img src={movie.poster_path} alt={movie.name}/>
        ))} */}
      </div>
    </div>
  );
}

export default Row;