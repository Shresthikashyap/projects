import React, { useCallback, useMemo, useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoList from './components/Demo/DemoList';

function App() {

  const [listTitle,setListTitle] = useState('Sorted in Ascending Order');
  const [buttonTitle,setButtonTitle] = useState('Sort in Descending Order');
  
  const itemList = useMemo(()=>{
    return [6,2,7,5,1];
  },[]);

  const descSortHandler = useCallback(() => {
    setListTitle('Sorted in descending Order');
    setButtonTitle('Sort in Ascending Order');
  },[]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title = {listTitle} items={itemList}></DemoList>
      <Button onClick={descSortHandler}>{buttonTitle}</Button>
    </div>
  );
}

export default App;
