import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';
//import userEvent from '@testing-library/user-event';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) =>{
    event.preventDefault();
    setIsLoading(true);
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //validation

    if(isLogin){
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCv1ruYo50isrfGtym2fBvPk_jC8xN4EC0',{
        method:'POST',
        body: JSON.stringify({
          email:enteredEmail,
          password:enteredPassword,
          returnSecureToken: true
        }),
        headers:{
          'Content-Type':'application/json'
        }
      }).then(async(res)=>{
        console.log('done')
        const token  = await res.json();
        console.log('token',token);
        if(res.ok){
          setIsLoading(false);
          console.log('done')
        }
        else{
          setIsLoading(false);
          alert('somethings wrong',res)
          return res.json().then((data)=>{
            console.log(data);
          })
        }
        })


    } else {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCv1ruYo50isrfGtym2fBvPk_jC8xN4EC0',{
        method:'POST',
        body: JSON.stringify({
            email:enteredEmail,
            password:enteredPassword,
          returnSecureToken: true
        }),
        headers:{
          'Content-Type':'application/json'
        }
      }).then(res=>{
        if(res.ok){
          setIsLoading(false);
          console.log('done')
        }else{
          setIsLoading(false);
          alert('email exists')
          return res.json().then((data)=>{
            console.log(data);
          })
        }
      })
    }
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        {isLoading ? <p style={{color:'white'}}>...Sending Request</p>
          :  
          <div className={classes.actions}>
             {isLogin ? <button>Login with existing account</button> : <button>Create new account</button>}
          </div>
          }
        <div className={classes.actions}>
          <button type='button' className={classes.toggle} onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
