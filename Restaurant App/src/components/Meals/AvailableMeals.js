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
        id:'m1',
        name:'Butter Chicken',
        description:'dumbhead it does not need any description',
        price:'₹100'
    },
    {
        id:'m1',
        name:'Butter Chicken',
        description:'dumbhead it does not need any description',
        price:'₹100'
    },
    {
        id:'m1',
        name:'Butter Chicken',
        description:'dumbhead it does not need any description',
        price:'₹100'
    }
]

const AvailableMeals = (props) =>{

    const availableMeals = DUMMY_MEALS.map((meals) =>
    <MealItem name={meals.name} description = {meals.description} price = {meals.price}/>)
    return (
        <section className={classes.meals}>
            <Card>
               {availableMeals}
            </Card>
        </section>
    )
}

export default AvailableMeals;