import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import './App.css';
import Cart from './Cart/Cart/Cart';
import AuthProvider from './Context/AuthProvider';
import Breakfast from './Pages/Home/Foods/BreakFast/Breakfast';
import Details from './Pages/Home/Foods/Details/Details';

import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import Header from './Pages/Shared/Header';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">

      <AuthProvider>
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

            <Route path="/foods/:id">
              <Details></Details>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/cart">
              <Cart></Cart>
            </PrivateRoute>

          </Switch>
        </BrowserRouter>
      </AuthProvider>


    </div >
  );
}

export default App;
