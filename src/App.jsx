import React, { Children } from 'react'
import Navbar from './Component/Navbar'
import Main from './Component/Main'
import Footer from './Component/Footer'
import SingleProducts from './Component/SingleProducts'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Allproduct from './Component/Allproduct'
import LoginPage from './Component/Loginpage'
import SignupForm from './Component/SignupForm'
import CheckoutOne from './Component/CheckoutOne'
import Success from './Component/Success'
import Failed from './Component/Failed'
import PageNotFound from './Component/PageNotFound'

const App = () => {

  return (
    <div className='min-h-screen'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element = {<Main/>}></Route>
          <Route path='/singlePage/:id' element = {<SingleProducts/>}></Route>
          <Route path='/AllProducts' element = {<Allproduct/>}></Route>
          <Route path='/LoginPage' element = {<LoginPage/>}></Route>
          <Route path='/SignupPage' element = {<SignupForm/>}></Route>
          <Route path='/CheckoutOne' element = {<ProtectedRoute><CheckoutOne/></ProtectedRoute>}></Route>
          <Route path='/Success' element = {<Success/>}></Route>
          <Route path='/failed' element = {<Failed/>}></Route>
          <Route path='/*' element = {<PageNotFound/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

export const ProtectedRoute = ({children}) => {
  const token = localStorage.getItem('token');
  if(token){
    return children
  }else{
    return <Navigate to={'/LoginPage'}/>
  }
}