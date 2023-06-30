import React from 'react'
import {Route,Routes} from "react-router-dom";
import Banner from './Banner';
import Main from './Main';
import Footer from './Footer';
import Notice from './Notice';
import Profile from './Pages/Profile/Profile';

export default function SubRouter() {
    return (
        <div className='container'>
        <Banner/>
        <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/notice' element={<Notice/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
        <Footer/>
        </div>
      )
}
