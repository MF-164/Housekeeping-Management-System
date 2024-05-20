import './Home.scss'
// import { useSelector } from 'react-redux'

const Home = () => {
  // const cleaningLadies = useSelector(s => s.allCleaningLadies.ladies)
  return (
    <div className='home'>
      <header><h1>header</h1></header>
      <nav>

      </nav>
      <main><h1>main</h1>
        {/* {cleaningLadies.map((lady, index) => {})} */}
      </main>
      <footer><h1>footer</h1></footer>
    </div>






    // <div className='home'>
    //   <header><h1>header</h1></header>
    //   <nav>
    //     <h1>navigate</h1>
    //     <Link to='/SignUp'>Sing Up</Link>
    //   </nav>
    //   <main><h1>main</h1>
    //     {/* {cleaningLadies.map((lady, index) => {

    //             })} */}
    //   </main>
    //   <footer><h1>footer</h1></footer>
    // </div>
  )
}

export default Home