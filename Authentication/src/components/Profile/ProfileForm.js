import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';
import { useContext, useRef } from 'react';

const ProfileForm = () => {

  const newPasswordRef = useRef();
  const authCntxt = useContext(AuthContext);
  const token = authCntxt.token;
 
 
  const changePasswordHandler = (event) =>{
    event.preventDefault();
    
    const changePassword = newPasswordRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCv1ruYo50isrfGtym2fBvPk_jC8xN4EC0',{
      method:'POST',
      body: JSON.stringify({
        idToken:token,
        password:changePassword,
        returnSecureToken: true
      }),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(async(res)=>{
      
      alert('Updation succesful');
      const data = await res.json();
      authCntxt.login(data.idToken)
      if(res.ok){
        console.log('done')
      }else{
        alert('somethings wrong',res);
        return res.json().then((data)=>{
          console.log(data);
        })
      }
    })
  }

  return (
    <form className={classes.form} onSubmit={changePasswordHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
