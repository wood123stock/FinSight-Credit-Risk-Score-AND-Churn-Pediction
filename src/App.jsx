import React from 'react'
// import EmployeeTemplate from './Components/Dashboard/EmployeeTemp'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Profile from './Components/Profile';
import Accounts from './Components/Accounts';
import Request from './Components/Request';
import PageNotFound from './Components/PageNotFound';
import HomePage from './Components/HomePage';
import MainLayout from './layouts/EmployeeLayout';
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element ={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/accounts' element={<Accounts/>}/>
        <Route path='/requests' element={<Request/>}/>
        <Route path ='/accounts/:accountNo' element={<Profile/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>  
  )
}

export default App
