import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DataStructure from './Components/DataStructure/DataStructure';
import Algorithm from './Components/Algorithm/Algorithm';
import { Nav } from 'react-bootstrap';
import NavBar from './Components/NavBar/NavBar';
import Details from './Components/Details/Details';

function App() {
  return (
    <div >


      <Router>

        <NavBar></NavBar>

        <Switch>

          <Route path="/dataStructure">

            <DataStructure></DataStructure>

          </Route>
          <Route path="/algorithm">

            <Algorithm></Algorithm>

          </Route>
          <Route path="/details">
               
               <Details></Details>
           

          </Route>
          <Route path="/home">
               
          <Home></Home>
           

          </Route>
          <Route exact path="/">

            <Home></Home>


          </Route>




        </Switch>
      </Router>



    </div>
  );
}

export default App;
