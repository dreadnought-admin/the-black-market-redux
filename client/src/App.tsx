import React from 'react'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { UserProvider } from './global/UserProvider';
import { RecordsProvider } from './global/RecordsProvider';
import { CartProvider } from './global/CartsProvider';


import About from './components/About'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import Navbar from './components/Navbar'
import NewRecordForm from './components/NewRecordForm'
import Login from './components/Login'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Checkout from './components/Checkout'
import Cart from './components/Cart'
import RecordList from './components/RecordList'
import Search from './components/Search'
import RecordDetail from './components/RecordDetail'
import FeaturedRecords from './components/FeaturedRecords'
import EditSelfRecord from './components/EditSelfRecord'
import EditUserProfile from './components/EditUserProfile'
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <UserProvider>
      <RecordsProvider>
        <CartProvider>

        <Navbar/>

        <Routes>

          <Route path="/signup"
          element={<Signup/>}
          />

          <Route path="/login"
          element={<Login/>}
          />

          <Route path="/about"
          element={<About/>}
          />

          <Route path="/cart"
          element={<Cart/>}
          />

          <Route path="/checkout"
          element={<Checkout/>}
          />

          <Route path="/"
          element = {<>
          <FeaturedRecords />
          <Home/>
          </>}
          />

          <Route path="/records"
          element={<>
          <Search />
          <RecordList />
          </>}
          />

          <Route path="/users/:id/edit"
          element={
            <EditUserProfile/>
          }
          />

          <Route path="/records/:id/edit"
          element={<EditSelfRecord/>}
          />

          <Route path="/records/:id"
          element={<RecordDetail/>}
          />

          {/* <ProtectedRoute path="/profile">
            <UserProfile />
          </ProtectedRoute>

          <ProtectedRoute path="/new_sale">
            <NewRecordForm />
          </ProtectedRoute> */}

        </Routes>
        <Footer/>
        </CartProvider>
      </RecordsProvider>
    </UserProvider>
  )
}

export default App