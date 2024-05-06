import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';
import LearnMore from './components/LearnMore';
import './App.css'
// import AgGrid from './components/AgGrid';
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element ={<Dashboard/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/AgBoard' element = {<Cart/>}></Route>
      <Route path='/learnMore' element = {<LearnMore/>}></Route>
      
    </Route>
  ))


  return (
    <>
    <RouterProvider router = {router}/>
    </>
  );
}

export default App;
