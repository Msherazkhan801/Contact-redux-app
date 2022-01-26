import './App.css';
import { ToastContainer } from 'react-toastify';
import {Routes, Route } from "react-router-dom"
import Navbar from './component/Navbar';
import Notfound from './pages/Notfound';
import Home from './pages/Home';
import Adduser from './component/User/Adduser';
import EditUser from './component/User/EditUser';
import User from './component/User/User';
const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
     
        <Routes >
          <Route exact  path="/"  element={<Home/>} />
          <Route exact path="/add" element={<Adduser/>} />
          <Route exact path="/edit/:id" element={<EditUser/>} />
          <Route exact path="/user" element={<User/>} />
          <Route exact path="*" element={<Notfound/>} />

        </Routes>

    </>
  )
}

export default App;
