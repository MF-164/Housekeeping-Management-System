
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
      {/* <BrowserRouter>
        <Routes>
          <Route path='' element={<Home/>} />
          <Route path='uu' element={<Login />} />
          <Route path='home' element={<Home />}/>
          <Route path='home/day' element={<DayList/>}/>
          <Route path='SingUp' element={<SignUp />} />
        </Routes>
      </BrowserRouter> */}
      <HourList dayId={1}/>
    </div>
  );
}

export default App;
