import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {

  const deleteMovie = async(event) => {
    event.preventDefault();

    const response = await fetch(`https://react-f984f-default-rtdb.firebaseio.com/movies/${props.id}.json`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete movie.');
    }

    console.log('Movie deleted successfully.');
  }

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={deleteMovie} >Delete Movie</button>
    </li>
  );
};

export default Movie;
