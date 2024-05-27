import './App.css';
import Home from './Home';
import CleaningLady from './store/features/CleaningLady/CleaningLady';

function App() {
 
  const cleaningLady={Id:22,FirstName:'Alona',LastName:'Yev',Phone:'0534122757',OriginCountry:'Tailand',City:'Ramat Gan',Address:'yona',HouseNumber:20,Status:'married',HourlyPrice:120}
  return (
    <div className="App">
     <CleaningLady cleaningLady={cleaningLady}></CleaningLady>
     <Home/>
    </div>
  );
}

export default App;
