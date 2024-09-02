import React from 'react'
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ListItems from './Components/ListItems/ListItems';

const App = () => {

  

  return (
    <div>
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/list' element={ <ListItems />} />
    </Routes>
       
    </div>
  )
}

export default App
