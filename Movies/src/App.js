import React, { useState, useEffect, useMemo, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState('');
  const [retry, setRetry] = useState('');

  const fetchMovies = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await fetch('https://swapi.dev/api/film/');
      const data = await response.json();

      const transformedData = data.results.map((movieData) => ({
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      }));

      setMovies(transformedData);
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
