
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/SingUp/SignUp'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchAllFromServer } from './store/features/CleaningLady/cleaningLadySlice'
import CleaningLadyList from './store/features/CleaningLady/CleaningLadyList'
import { fetchAllClient } from './store/features/Client/clientSlice'
import ClientList from './store/features/Client/ClientList'
import HourList from './store/features/Hour/HourList';
function App() {

  let dispatch = useDispatch()

  // useEffect(() => {
  //   fetchData()
  // }, [])

  const fetchData = () => {
    dispatch(fetchAllClient())
    dispatch(fetchAllFromServer())
  }

  let ladies = useSelector(s => s.cleaningLady.allCleaningLadies.ladies)
  let clients = useSelector(s => s.client.allClients.clients)
  
  return (
    <div className="App">
{/* 
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Navbar currentClient={{ role: 'manager' }} list={[{ name: 'baba', city: 'koko' }]} />} />
          <Route path='Login' element={<Login />} />
          <Route path='home' element={<Home />} />
          <Route path='SignUp' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <CleaningLadyList allCleaningLadies={ladies} />
      <ClientList allClients={clients} /> */}
    <HourList dayId = {1}/>
    </div>
  );
}

export default App;
