import React from 'react';

//import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';

const OrderList = props => {

    console.log('in order lit ',props);
    
  return (
    <ul >
      {props.items.map(index => (
        <li
          key={index}
        >
        </li>
      ))}
    </ul>
  );
};

export default OrderList;
