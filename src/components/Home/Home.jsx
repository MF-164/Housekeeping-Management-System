import './Home.scss'
import {createContext} from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
    </div>
  )
}

export default Home