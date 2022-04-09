// import logo from './logo.svg';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import {Home} from './Components/Home'
import {Login} from './Components/Login'
import {RegisterPage} from './Components/RegisterPage'
import {Employees} from './Components/Employees'
import {Navbar} from './Components/Navbar'
function App() {
  return (
    <div className="App">
     <h1>hello</h1>
     <Navbar />
     <Routes>
<Route path='/' element={<Home />} />
<Route path='/login' element={<Login />} />
<Route path='/register' element={<RegisterPage />} />
<Route path='/:id' element={<Employees />} />
     </Routes>
    </div>
  );
}

export default App;
