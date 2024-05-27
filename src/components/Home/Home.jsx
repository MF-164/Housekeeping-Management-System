import './Home.scss'
import {createContext} from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const cleaningLadies = useSelector(s => s.allCleaningLadies.ladies)
  const list = createContext(cleaningLadies.map(lady=>{return {...lady}}))
  return (
    <div className='home'>
      <header><h1>header</h1></header>
    </div>
  )
}

export default Home