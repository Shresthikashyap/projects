import react from "react";
import classes from './Button.css';


const Button = (props) =>{
    return(
        <div>
            <button 
            classes={classes.button} 
            type={props.type || 'button'} 
            onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    )
}

export default Button;