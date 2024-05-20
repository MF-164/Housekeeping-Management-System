
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  Login  from './components/Login/Login';
import SignUp from './components/SingUp/SignUp'
import Home from './components/Home/Home'
import Navbar from './components/Home/Navbar';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='' element={<Navbar title="Cleaning Lady"/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='SignUp' element={<SignUp/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
