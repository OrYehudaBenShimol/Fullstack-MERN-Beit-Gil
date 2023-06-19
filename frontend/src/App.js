import { BrowserRouter, Routes, Route , Navigate, } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';


//Pages and componenets.
import Home from './pages/Home';
import AddUsers from './pages/AddUsers';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ManageUsers from './pages/ManageUsers';
import AttendenceCheck from './pages/AttendenceCheck';
import MorningMeeting from './pages/MorningMeeting';
import AddSchedules from './pages/AddSchedules';
import Statistics from './pages/Statistics';
import { useEffect } from 'react';


function App() {
  const {user} = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route
            path='/login' element={!user ? <Login /> : <Navigate to='/' />}
            />
            <Route
            path='/AddUser' element={user ? <AddUsers /> : <Navigate to='/login' />}
            />
            <Route
            path='/AddSchedules' element={user ? <AddSchedules /> : <Navigate to='/login' />}
            />
            <Route
            path='/ManageUsers' element={user ? <ManageUsers /> : <Navigate to='/login' />}
            />
            <Route
            path='/Statistics' element={user ? <Statistics /> : <Navigate to='/login' />}
            />
            <Route
            path='/MorningAttendence' element={user ? <AttendenceCheck /> : <Navigate to='/login' />}
            />
            <Route
            path='/MorningMeeting' element={user ? <MorningMeeting /> : <Navigate to='/login' />}
            />
            <Route
            exact path='/' element={user ? <Home /> : <Navigate to='/login' />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
