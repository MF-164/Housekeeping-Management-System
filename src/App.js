import './App.css';
import CleaningLady from './store/features/CleaningLady/CleaningLady';
import Client from './store/features/Client/Client';
import ClientList from './store/features/Client/ClientList';
function App() {
  const client ={Id:0,Name:'Brayndy',Password:1234,Phone:'0534122757',City:'Elad',Address:'Ben zakay',HouseNumber:9}
  const cleaningLady={Id:22,FirstName:'Alona',LastName:'Yev',Phone:'0534122757',OriginCountry:'Tailand',City:'Ramat Gan',Address:'yona',HouseNumber:20,Status:'married',HourlyPrice:120}
  return (
    <div className="App">
     {/* <Client client={client}></Client> */}
     {/* <ClientList></ClientList> */}
     <CleaningLady cleaningLady={cleaningLady}></CleaningLady>
    </div>
  );
}

export default App;
