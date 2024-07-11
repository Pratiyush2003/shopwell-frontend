import React from 'react'
import Navbar from './Component/Navbar'
import Main from './Component/Main'
import Footer from './Component/Footer'
import SingleProducts from './Component/SingleProducts'
import {BrowserRouter, Routes, Route} from "react-router-dom"
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
          <Route path='/CheckoutOne' element = {<CheckoutOne/>}></Route>
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