import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import { useState } from 'react';

function App() {

  const [movies,setMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  const setMoviesHandler = async() =>{
    try{
      setIsLoading(true);

       const response = await fetch('https://swapi.dev/api/films/');
       const data = await response.json();

       const transformedData = data.results.map((movieData)=>{
        return{
          id:movieData.episode_id,
          title:movieData.title,
          openingText:movieData.opening_crawl,
          releaseDate:movieData.release_date
        }
       });

       setMovies(transformedData);
       setIsLoading(false);
    }
    catch(err){
       console.log(err)
    }
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={setMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length>0 &&<MoviesList movies={movies} />}
        {!isLoading && movies.length===0 && <p>No movie found</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
