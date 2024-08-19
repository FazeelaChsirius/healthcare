import './index.css';
import 'animate.css';
import 'remixicon/fonts/remixicon.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Device from './components/Device';
import Doctor from './components/Doctor';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/device' element={<Device />} />
        <Route path='/doctor' element={<Doctor />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
