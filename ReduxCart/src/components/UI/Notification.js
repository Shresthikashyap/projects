import React from 'react';
import classes from './Notification.module.css';

const Notification = (props) => {
  let specialClasses = '';

  if (props.status === 'error') {
    specialClasses = classes.error;
  } else if (props.status === 'success') {
    specialClasses = classes.success;
  } else if (props.status === 'pending') {
    specialClasses = classes.pending;
  }

  return (
    <section className={`${classes.notification} ${specialClasses}`}>
        <div>
          <span>{props.title}</span> 
          <span className={classes.message}>{props.message}</span>        
        </div>

    </section>
  );
};

export default Notification;
