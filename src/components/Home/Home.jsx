import './Home.scss'
import {createContext} from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  const cleaningLadies = useSelector(s => s.allCleaningLadies.ladies)
  const list = createContext(cleaningLadies.map(lady=>{return {...lady}}))
  return (
    <div className='home'>
      <Navbar/>
    </div>
  )
}

export default Home