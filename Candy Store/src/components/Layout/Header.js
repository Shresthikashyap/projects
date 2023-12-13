import {Fragment} from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css'

const Header = (props) =>{

    return (
        <Fragment>
            <header className={classes.header}>
                <h2>React Candies</h2>
                <HeaderCartButton  onClickButton={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src='https://img.freepik.com/premium-photo/brightly-colored-candy-land-with-castle-lot-candy-generative-ai_899870-45833.jpg?w=996' 
                alt="A table full of delicious food" />
            </div>
            
        </Fragment>
    )
}

export default Header
