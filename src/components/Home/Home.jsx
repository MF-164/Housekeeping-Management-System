import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'



const Home = () => {

 
    // const cleaningLadies = useSelector(s => s.allCleaningLadies.ladies)
    return (
        <div className='home'>
            <header><h1>header</h1></header>
            <nav>
                <h1>navigate</h1>
                <Link to='./Login'>Log in</Link>
                <Link to='./SingUp'>Sing Up</Link>
            </nav>
            <main><h1>main</h1>
                {/* {cleaningLadies.map((lady, index) => {

                })} */}
            </main>
            <footer><h1>footer</h1></footer>
        </div>
    )
}

export default Home