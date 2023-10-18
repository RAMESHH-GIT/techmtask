import logo from './logo.svg';
import './App.css';
import UserList from './Component/users/UserList'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import UserList from './Component/users/UserList'
import UserDetails from './Component/users/UserDetails';
function App() {
  return (
    <div className="App">
     <h1>Welcome To Task</h1>
     
     <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:userId" element={<UserDetails />} />

      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
