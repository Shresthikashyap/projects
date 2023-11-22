import React, { useState } from "react";
import Card from "../UI/Card.js";
import  classes from './AddUser.css';
import Button from '../UI/Button.js'
import ErrorModal from "../UI/ErrorModal.js";
import Wrapper from "../UI/Wrapper.js";

const AddUser = props =>{

    const [enteredName, setUserName] = useState('');
    const [enteredAge, setUserAge] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = (event) =>{
        event.preventDefault();

        if(enteredName.trim().length ===0 || enteredAge.trim().length === 0 || enteredAge < 1){
            setError({title:"An error has occured" ,message:"Please enter valid name ans age"})
            return;
        }

        props.onAddUser(enteredAge, enteredName);
        setUserName('');
        setUserAge('');
    }

    const userNameHandler = (event) =>{
        setUserName(event.target.value);
    }

    const userAgeHandler = (event) =>{
        setUserAge(event.target.value);
    }

    const errorHandler = () =>{
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username" >UserName</label>
            <input id="username" type="text" value={enteredName} onChange={userNameHandler}/>
            <label htmlFor="age" >Age</label>
            <input type="number"id="age" value={enteredAge} onChange={userAgeHandler}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </Wrapper>
    )

}

export default AddUser;