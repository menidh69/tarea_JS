import Home from './components/Home'
import Ex1 from './components/Ex1'
import Ex2 from './components/Ex2'
import Ex3 from './components/Ex3'
import Ex4 from './components/Ex4'
import Ex5 from './components/Ex5'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css"


function App() {
  return (
    <Router>
   
    <Navbar/>
      
    <Switch>
          <Route path="/ejercicio1">
            <Ex1/>
            </Route>
          <Route path="/ejercicio2">
            <Ex2/>
            </Route>
          <Route path="/ejercicio3">
            <Ex3/>
            </Route>
          <Route path="/ejercicio4">
            <Ex4/>
            </Route>
          <Route path="/ejercicio5">
            <Ex5/>
            </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
