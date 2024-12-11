
import './App.css'
import {  Route, Routes } from "react-router-dom";
import Signin from './pages/Signin';
import Admin from './pages/Admin';
import Signup from './pages/Signup';
import Addcustomer from './pages/Addcustomer';
function App() {

  return (
    <div>
<Routes>
<Route path='/' element={<Signin/>}/>
<Route path='/Signup' element={<Signup/>}/>


<Route path='/addcustomer' element={<Addcustomer/>}/>
{/* <Route path='/Signup' element={<Signup/>}/> */}

<Route path='/admin' element={<Admin/>}/>
</Routes>
    </div>
  )
}

export default App
