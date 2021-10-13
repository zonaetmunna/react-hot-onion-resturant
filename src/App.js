import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import './App.css';
import Breakfast from './Pages/Home/Foods/BreakFast/Breakfast';
import Details from './Pages/Home/Foods/Details/Details';
import LaunchFoods from './Pages/Home/Foods/LaunchFoods/LaunchFoods';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/launch">
            <LaunchFoods></LaunchFoods>
          </Route>
          <Route path="/foods/:id">
            <Details></Details>
          </Route>
        </Switch>
      </BrowserRouter>


    </div >
  );
}

export default App;
