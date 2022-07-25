import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Allcomponents from './Components/Allcomponent/Allcomponents';
import Work from './Components/Work/Work';
import Portfolio from './Components/Portfolio/Portfolio';
import Profile from './Components/Profile/Profile';

function App(props) {
  return (
    <div>


      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route  path='/' exact element={<Allcomponents />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Work' element={<Work />} />
      <Route path='/Portfolio' element={<Portfolio />} />
      <Route path='/Profile' element={<Profile />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;