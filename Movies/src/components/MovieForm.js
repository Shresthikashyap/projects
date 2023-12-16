import {useState} from 'react';
import classes from './MovieForm.module.css'

const MovieForm = (props) => {

    const [setTitle,updateSetTitle] = useState('');
    const [setReleaseDate,updateReleaseDate] = useState('');
    const [setOpeningText,updateOpeningText] = useState('');

    const updateTitleHandler = (event) =>{
        updateSetTitle(event.target.value);
    }

    const updateReleaseDateHandler = (event) =>{
        updateReleaseDate(event.target.value);
    }

    const updateOpeningTextHandler = (event) =>{
        updateOpeningText(event.target.value);
    }

    const formSubmitHandler = (event) =>{
        event.preventDefault();
    
        const movie ={
            id:Math.random().toString(),
            title:setTitle,
            releaseDate:setReleaseDate,
            openingText:setOpeningText
        }
        
        console.log('movies ',movie);
        updateSetTitle('');
        updateReleaseDate('');
        updateOpeningText('');
    }

    return(
        <div className={classes.movie}>
            <h2>List your movie</h2>
            <form onSubmit={formSubmitHandler}>
                <label>Title</label>
                <input type="text" value={setTitle} onChange={updateTitleHandler}/>
                <label>Release Date</label>
                <input type="date" value={setReleaseDate} onChange={updateReleaseDateHandler}/>
                <label>Opening Text</label>
                <input type="text" value={setOpeningText} onChange={updateOpeningTextHandler}/>  
                <button>Add Movie</button>                          
            </form>
        </div>
    )
}

export default MovieForm;