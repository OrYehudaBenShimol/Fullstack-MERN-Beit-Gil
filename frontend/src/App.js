import { BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages and componenets.
import Home from './pages/Home';
import AddUsers from './pages/AddUsers';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route
            path='/' element={<Home/>}
            />
            <Route
            path='/AddUser' element={<AddUsers/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
