import React from 'react';
import Auth from './components/Auth';
import Gallery from './components/Gallery'
import { Route, Routes } from 'react-router-dom';

 function App(){
 return(
  <>
  <Routes>
<Route path='/' element={<Auth/>}></Route>
<Route path='/gallery' element={<Gallery/>}></Route>
  </Routes>
  </>
 )
}

export default App