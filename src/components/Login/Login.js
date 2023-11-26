import React, { useState,useReducer, useEffect, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';

const emailReducer = (state,action) => {
  if(action.type === 'USER_INPUT'){
    return {value:action.val, isValid: action.val.includes('@')};
  }
  if(action.type === 'BLUR_INPUT'){
    return {value:state.value, isValid: state.value.includes('@')};
  }  
  return {value:'', isValid: false};
};

const passwordReducer = (state,action) => {
  if(action.type === 'USER_INPUT'){
    return {value:action.val, isValid: action.val.length > 6};
  }
  if(action.type === 'BLUR_INPUT'){
    return {value:state.value, isValid: state.value.length > 6};
  }  
  return {value:'', isValid: false};
};

const Login = (props) => {
  
  const authctx = useContext(AuthContext);

  const [enteredCollege, setEnteredCollege] = useState('');  
  const [collegeIsValid, setCollegeIsValid] = useState(''); 
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState,dispatchEmail] = useReducer(emailReducer,{
    value:'',
    isValid:false
  });

  const [passwordState,dispatchPassword] = useReducer(passwordReducer,{
    value:'',
    isValid:false
  });

  useEffect(()=>{
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEAN UP');
    }
  },[]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT',val: event.target.value})

    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid && enteredCollege.trim().length !== 0
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT',val: event.target.value})

    setFormIsValid(
      emailState.isValid  && enteredCollege.trim().length !== 0
    );
  };

  const collegeChangeHandler = (event) => {
    setEnteredCollege(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6  && enteredCollege.trim().length !== 0
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'BLUR_INPUT'})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'BLUR_INPUT'})
  };

  const validateCollegeHandler = () => {
    setCollegeIsValid(enteredCollege.trim().length !== 0);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authctx.onLogin(emailState.value, passwordState.value, enteredCollege);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            collegeIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="college">College</label>
          <input
            type="text"
            id="college"
            value={enteredCollege}
            onChange={collegeChangeHandler}
            onBlur={validateCollegeHandler}
          />
        </div>        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;