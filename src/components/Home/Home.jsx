import './Home.scss'
import CleaningLadyList from '../../store/features/CleaningLady/CleaningLadyList'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import ButtomBack from '../ButtonBack/ButtonBack';
import ClientList from '../../store/features/Client/ClientList';
import { useEffect } from 'react';

const Home = () => {
  let currentClient=useSelector(s=>s.client.currentClient.client)


  return (
    <div className='home'>
      <Navbar list={"cleaningLadies"}/>

       <CleaningLadyList></CleaningLadyList> 
     
      <ButtomBack navigate={"/"}></ButtomBack>
    </div >
  )
}

export default Home