import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {

  const deleteMovie = async(event) => {
    event.preventDefault();
    try{
      const getResponse = await fetch('https://react-f984f-default-rtdb.firebaseio.com/movies.json');
      const data = await getResponse.json();
  
      let id = null;
  
      for(const key in data){
        if(data[key].title === props.title){
          id = key;
        }
      }
      
      console.log(id)
      const response = await fetch(`https://react-f984f-default-rtdb.firebaseio.com/movies/${id}.json`, {
        method: 'DELETE',
      });
    }
    catch(err){
      console.log(err)
    }
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
