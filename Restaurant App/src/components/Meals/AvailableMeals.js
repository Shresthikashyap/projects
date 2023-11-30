import React from 'react';

import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
import Card from '../UI/Card';

const DUMMY_MEALS = [
    {
        id:'m1',
        name:'Butter Chicken',
        description:'dumbhead it does not need any description',
        price:'₹100'
    },
    {
        id:'m2',
        name:'Pasta',
        description:'delicioso',
        price:'₹80'
    },
    {
        id:'m3',
        name:'Pizza',
        description:'Its tasty but you cannot live on it. Learn how to Cook Roti and Sabji',
        price:'₹110'
    },
    {
        id:'m4',
        name:'Peeli wali dal with roti',
        description:'Till you are learning how to cook, let us serve you with ghar ka khaana',
        price:'₹100'
    }
]

const AvailableMeals = () =>{

    const availableMeals = DUMMY_MEALS.map((meal) =>
    <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>)
    return (
        <section className={classes.meals}>
            <Card>
               <ul>{availableMeals}</ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;