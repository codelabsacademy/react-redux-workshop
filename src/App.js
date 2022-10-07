import './App.css';
import 'antd/dist/antd.min.css';

import TodoPage from "./pages/TodoPage"
import UsersPage from "./pages/UsersPage"
 
import {Link, Routes, BrowserRouter as Router, Route } from "react-router-dom"

function App() {

  return (
     <div>
        <Router>
          <Link to="/home">Home </Link>
          <Link to="/todo">Todo list </Link>
          <Link to="/users">Users list </Link>

          <Routes>
            <Route path="/home" element={<div>Home Page</div>}/>
            <Route path ="/todo" element={<TodoPage/>}/>
            <Route path="/users" element={<UsersPage/>}/>
          </Routes>
        </Router>
     </div>
  );
}

export default App;
