import './Home.scss'
import CleaningLadyList from '../../store/features/CleaningLady/CleaningLadyList'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div className='home'>
      <Navbar currentClient={{ role: 'manager' }} list={[{ name: 'baba', city: 'koko' }]} />
      <CleaningLadyList></CleaningLadyList>
    </div>
  )
}

export default Home