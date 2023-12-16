import React, { useState, useEffect, useMemo, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState('');
  const [retry, setRetry] = useState('');

  const fetchMovies = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await fetch('https://react-f984f-default-rtdb.firebaseio.com/movies.json');
      const data = await response.json();

      const loadMovies = [];

      for(const key in data){
        loadMovies.push({
          id:key,
          title:data[key].title,
          releaseDate:data[key].releaseDate,
          openingText:data[key].openingText
        })
      }

      setMovies(loadMovies);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setError('Something Went Wrong');
      setTimeout(() => {
        setError('');
        setRetry('something Went Wrong ...Retrying');
      }, 3000);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const addMovieHandler = async(movie) => {
    
    const response = await fetch('https://react-f984f-default-rtdb.firebaseio.com/movies.json',{
      method:'POST',
      body: JSON.stringify(movie),
      headers:{
        'Content-Type':'application/json'
      }
    });

    const data = await response.json();
     
    console.log(data);
  }

  const retryingHandler = useCallback(() => {
    setRetry('');
    setError('Something Went Wrong');
    fetchMovies();
  }, [fetchMovies]);

  const moviesListMemo = useMemo(() => {
    return <MoviesList movies={movies} />;
  }, [movies]);

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && moviesListMemo}
        {!isLoading && movies.length === 0 && <p>No movie found</p>}
        {isLoading && !err && retry.length === 0 && <p>Loading...</p>}
        {err.length === 0 ? <p>{retry}</p> : <p>{err}</p>}
        {retry && <button onClick={retryingHandler}> Cancel </button>}
      </section>
    </React.Fragment>
  );
}

export default App;
