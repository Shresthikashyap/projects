import React,{useState} from 'react';
//import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {
 
  const [usersList,setUsersList] = useState([]);

  const userHandler = (userName,userAge) =>{
    setUsersList((prevUserList)=>{
      return [...prevUserList, {name:userName,age: userAge, id: Math.random().toString()}];
    })
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={userHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </React.Fragment>
  );
};

export default App;
