import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import { useState } from 'react';

function App() {

  const [movies,setMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [err,setError] = useState('');
  const [retry,setRetry] = useState('');

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
       setError('Something Went Wrong');
       setTimeout(()=>{
        setError('');
        setRetry('something Went Wrong ...Retrying');
       },3000);
    }
  }

  const retryingHandler = () =>{
    setRetry('');
    setError('Something Went Wrong');
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={setMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length>0 &&<MoviesList movies={movies} />}
        {!isLoading && movies.length===0 && <p>No movie found</p>}
        {isLoading && !err && retry.length === 0 && <p>Loading...</p>}
        {err.length===0?<p>{retry}</p>:<p>{err}</p>}
        {retry &&<button onClick={retryingHandler}> Cancel </button>}
      </section>
    </React.Fragment>
  );
}

export default App;
