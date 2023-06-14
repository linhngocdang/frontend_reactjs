import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './page/Home/Home';
import Diagnostic from './page/Diagnostic/Diagnostic';
import PatientList from './page/PatientList/PatientList';
import UserLogin from './Components/Header/UserLogin/UserLogin';
import './App.scss'
import Register from './Components/Header/Register/Register';
import Detail from './Components/Detail/Detail';
import Edit from './Components/Edit/Edit';
import PrivateRoute from './Components/Header/PrivateRoute/PrivateRoute';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/diagnostic' element={
            <PrivateRoute>
              <Diagnostic />
            </PrivateRoute>}/>
          <Route path='/diagnostic-list' element={
            <PrivateRoute>
              <PatientList />
            </PrivateRoute>}/>
          <Route path='/login' element={<UserLogin />} />
          <Route path='/register' element={<Register />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;

