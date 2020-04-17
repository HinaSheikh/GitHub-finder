import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Users from './components/Users/Users';
import User from './components/Users/User/User';
import Search from './components/Users/Search';
import axios from 'axios';
import Alert from './components/Alert/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/Pages/About'
import Home from './components/Pages/Home'
import NotFound from './components/Pages/ComponentNotFound'

const App = ()=> {
  const [users,setUsers] = useState([]);
  const [user,setUser] = useState({});
  const [loading,setloading] = useState(false);
  const [alert,setAlert] = useState(null);
  
  let githubClientId ;
  let githubClientSecret;

  if (process.env.NODE_ENV !== 'production'){
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  }
  else{
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;

  }
  const searchUsers =async  text =>{
    setloading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}
    &client_id=${githubClientId}&client_secret=
    ${githubClientSecret}`);
    setUsers( res.data.items);
    setloading(false);

  }

  const clearUsers =() =>  {
    setUsers([]);
    setloading(false);
  }
  const setAlerts = (msg,type) =>{
    setAlert({msg,type});
    setTimeout(()=> setAlert(null),5000);
  }
  const getUser = async username =>{
    setloading(true);
    const res = await axios.get(`https://api.github.com/users/${username}?
    client_id=${githubClientId}
    &client_secret=${githubClientSecret}`);
    setUser( res.data);
     setloading(false);
  }
  return (
    <Router>
      <div className="App">
      <Navbar title ="GitHub" icon ="fab fa-github"></Navbar>
      <div className="container">
      <Alert alert={alert}></Alert>
      <Switch>
        <Route exact path='/'  componnet ={Home} render={props=>(
          <React.Fragment>
            <Search  searchUsers = {searchUsers} clearUsers={clearUsers} 
            showClear={users.length > 0 ? true :false} setAlert ={setAlerts}/>
            <Users loading = {loading} 
              users = {users}/>
            </React.Fragment>
        )}>
       </Route>
       <Route exact path='/about' component={About}/>
       <Route exact path ='/user/:login' render={props=> (
       <User {...props} getUser={getUser}  
       user = {user} loading={loading} /> )}></Route>
       <Route component={NotFound}></Route>
     </Switch>
        </div> 
    </div>
    </Router>
    
  );
}

export default App;
