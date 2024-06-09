
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/SingUp/SignUp'
import Home from './components/Home/Home'
import DayList from './store/features/Day/DayList'
import HourList from './store/features/Hour/HourList';
function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='home' element={<Home/>} /> */}
          <Route path='' element={<Login />} />
          <Route path='home' element={<Home />}/>
          <Route path='home/day' element={<DayList/>}/>
          <Route path='home/day/hour' element={<HourList/>}/>
          <Route path='SignUp' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
