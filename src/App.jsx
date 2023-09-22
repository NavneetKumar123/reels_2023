

import './App.css';
import Login from './component/Login'
import {Routes,Route} from "react-router-dom";
import Feed from "./component/Feed";
import Profile from "./component/Profile";
import Signup from "./component/Signup";


function App() {
  

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/" element={<Feed></Feed>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="signup" element={<Signup></Signup>}></Route>

        </Routes>
      
      </div>
    </>
  )
}

export default App
