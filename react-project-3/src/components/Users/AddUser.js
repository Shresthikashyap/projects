import React, { useState, useRef } from "react";
import Card from "../UI/Card.js";
import  classes from './AddUser.css';
import Button from '../UI/Button.js'
import ErrorModal from "../UI/ErrorModal.js";
import Wrapper from "../UI/Wrapper.js";

const AddUser = props =>{

    const enteredNameRef = useRef();
    const enteredAgeRef = useRef();
    const enteredCollegeNameRef = useRef();

    const [error, setError] = useState('');

    const addUserHandler = (event) =>{
        event.preventDefault();

        const enteredName = enteredNameRef.current.value;
        const enteredAge = enteredAgeRef.current.value;
        const enteredCollegeName = enteredCollegeNameRef.current.value;

        if(enteredName.trim().length ===0 || enteredAge.trim().length === 0 || enteredAge < 1 || enteredCollegeName.trim().length === 0){
            setError({title:"An error has occured" ,message:"Please enter valid inputs"})
            return;
        }

        props.onAddUser(enteredName,enteredAgeRef);
        enteredNameRef.current.value = '';
        enteredAgeRef.current.value = '';
        enteredCollegeNameRef.current.value = '';
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
            <input id="username" type="text" ref={enteredNameRef}/>
            <label htmlFor="age" >Age</label>
            <input type="number"id="age" ref={enteredAgeRef}/>
            <label htmlFor="college" >College Name</label>
            <input type="text"id="collegeName" ref={enteredCollegeNameRef}/>            
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </Wrapper>
    )

}

export default AddUser;