import './App.css';
import Auth from './components/auth/Auth';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav'
import Logout from './components/auth/logout/Logout';
// import MessageIndex from './components/messages/MessageIndex'
import RoomIndex from './components/room/RoomIndex';
import MessageUpdate from './components/messages/MessageUpdate';

function App() {

  // Token use state set up
  const [ sessionToken, setSessionToken ] = useState('');
  
  console.log('Token: ', sessionToken)

  const updateToken = newToken => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }

  // Token use ref set up
  useEffect(() => {
    if(localStorage.getItem('token')) {
      console.log('inside useEffect App.jsx')
      setSessionToken(localStorage.getItem('token'))
    }
  },[])

  return (
    <div className="App">
     <Nav />
     {
      sessionToken !== '' ? 
      <Logout setSessionToken={setSessionToken}/> : null}
     <Routes>
        <Route 
          path='/'
          element={<Auth updateToken={updateToken} />}
        />
         <Route 
          path='/room'
          element={<RoomIndex token={sessionToken} />}
        />
         <Route 
          path='/message/update/:id'
          element={<MessageUpdate token={sessionToken} />}
        />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
