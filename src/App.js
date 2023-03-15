import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Register from './pages/Register';
import BookingHome from './pages/BookingHome';
import Login from './pages/Login';
import Home from './pages/Home';
// import 'antd/dist/antd.css'
import 'antd/dist/reset.css';
function App() {
  return <div className="App">
   
   <BrowserRouter>
   <Routes>
   <Route  exact path='/'  element={<Home/>}/>
   {/* <Route exact path='/login'  element={<Login/>}/>
   <Route exact path='/register'  element={<Register/>}/>
   <Route exact path='/booking/:carid'  element={<BookingHome/>}/> */}
   </Routes>

   </BrowserRouter>


    </div>
  
}

export default App;
