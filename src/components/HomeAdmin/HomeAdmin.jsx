import './HomeAdmin.scss'
import CleaningLadyList from '../../store/features/CleaningLady/CleaningLadyList'
import { useSelector } from 'react-redux'
import ButtomBack from '../ButtonBack/ButtonBack';
import ClientList from '../../store/features/Client/ClientList';
import Navbar from '../Navbar/Navbar';

const HomeAdmin = () => {
  let currentClient=useSelector(s=>s.client.currentClient.client)


  return (
    <div className='home'>
      <Navbar list={"clients"}/>
      
     <ClientList/>
     
      <ButtomBack navigate={"/home"}></ButtomBack>
    </div >
  )
}

export default HomeAdmin