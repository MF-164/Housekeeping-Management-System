import './App.css';
import Home from './Home';
import CleaningLady from './store/features/CleaningLady/CleaningLady';
import Client from './store/features/Client/Client';
import ClientList from './store/features/Client/ClientList';
import CleaningLadyList from './store/features/CleaningLady/CleaningLadyList';
function App() {
 
  const cleaningLady={Id:22,FirstName:'Alona',LastName:'Yev',Phone:'0534122757',OriginCountry:'Tailand',City:'Ramat Gan',Address:'yona',HouseNumber:20,Status:'married',HourlyPrice:120}
  const allClienst=[{Id:0,Name:'Brayndy',Password:1234,Phone:'0534122757',City:'Elad',Address:'Ben zakay',HouseNumber:9},
{Id:1,Name:'Maly',Password:36633,Phone:'052763998',City:'Bnei Brak',Address:'Amiel',HouseNumber:12},
{Id:2,Name:'Shoshi',Password:5333,Phone:'0545454542',City:'Raanana',Address:'Hasade',HouseNumber:52},
{Id:3,Name:'Jon',Password:825852,Phone:'0522156664',City:'Ramat Gan',Address:'Jabotinsky',HouseNumber:69}]
  
const allCleaningLadies = [{ Id: 22, FirstName: 'Alona', LastName: 'Yev', Phone: '0534122757', OriginCountry: 'Tailand', City: 'Ramat Gan', Address: 'yona', HouseNumber: 20, Status: 'married', HourlyPrice: 120 },
{ Id: 23, FirstName: 'Tyshf', LastName: 'Fggev', Phone: '050514542', OriginCountry: 'Tailand', City: 'Ramat Gan', Address: 'yona', HouseNumber: 20, Status: 'married', HourlyPrice: 120 },
{ Id: 24, FirstName: 'Ghhgh', LastName: 'Lopkj', Phone: '055523269', OriginCountry: 'Tailand', City: 'Ramat Gan', Address: 'yona', HouseNumber: 20, Status: 'married', HourlyPrice: 120 },
{ Id: 25, FirstName: 'Klvkjfvj', LastName: 'Xggwevh', Phone: '052246397', OriginCountry: 'Tailand', City: 'Ramat Gan', Address: 'yona', HouseNumber: 20, Status: 'married', HourlyPrice: 120 },
{ Id: 26, FirstName: 'Jone', LastName: 'Der', Phone: '052246397', OriginCountry: 'Tailand', City: 'Ramat Gan', Address: 'yona', HouseNumber: 20, Status: 'married', HourlyPrice: 120 },
{ Id: 27, FirstName: 'Klvkjfvj', LastName: 'Lpo', Phone: '052246397', OriginCountry: 'Tailand', City: 'Ramat Gan', Address: 'yona', HouseNumber: 20, Status: 'married', HourlyPrice: 120 }]


  return (
    <div className="App">
     {/* <Client client={client}></Client> */}
     <ClientList allClients={allClienst}></ClientList>
     {/* <CleaningLady cleaningLady={cleaningLady}></CleaningLady> */}
     {/* <CleaningLadyList allCleaningLadies={allCleaningLadies}></CleaningLadyList> */}
     <CleaningLady cleaningLady={cleaningLady}></CleaningLady>
     <Home/>
    </div>
  );
}

export default App;
