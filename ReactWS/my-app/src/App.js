import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './components/postsAxios';
import Login from'./components/login';
import Register from './components/register';
import PageNotFound from './components/pagenotfound';
import Furniture from './components/furniture';
import FurnitureForm from './components/addfurniture';
import { Route, Switch, Redirect } from "react-router-dom";
import FurnitureUpdate from './components/updatefurniture';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/postsAxios" component={Posts} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/furniture" component={Furniture} />
        <Route path="/furnitures/add" component={FurnitureForm}/>
        <Route path="/furnitures/update/:furnitureId" component={FurnitureUpdate}/>
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
export default App;
