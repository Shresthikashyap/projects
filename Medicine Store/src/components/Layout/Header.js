import {Fragment} from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css'

const Header = (props) =>{

    return (
        <Fragment>
            <header className={classes.header}>
                <h2>React meals</h2>
                <HeaderCartButton  onClickButton={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src='https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                alt="A table full of delicious food" />
            </div>
            
        </Fragment>
    )
}

export default Header
