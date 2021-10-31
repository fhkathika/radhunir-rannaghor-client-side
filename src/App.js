import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

import NavBaar from './page/Shared/Header/NavBaar';
import initializeApplication from './page/Firebase/fireebase.init';
import Login from './page/Login/Login';
import AuthProvider from './page/Context/AuthProvider';
import MyOrder from './page/MyOrder/MyOrder';
import ManageOrders from './page/ManageOrders/ManageOrders';
import AddNewService from './page/AddNewService/AddNewService';
import Home from './page/Home/Home';
import OrderPlace from './page/Home/OrderPlace/OrderPlace';
import PrivateRoute from './page/PrivateRoute/PrivateRoute';

function App() {
initializeApplication()
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <NavBaar></NavBaar>
      <Switch>
      <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='/home'>
        <Home></Home>
        </Route>
        
        <Route  path='/login'>
  <Login></Login>
</Route>
<Route path='/myorder'>
        <MyOrder></MyOrder>
        </Route>
<Route path='/manageallorder'>
        <ManageOrders></ManageOrders>
        </Route>
<Route path='/addnewservice'>
       <AddNewService></AddNewService>
        </Route>
<PrivateRoute path='/orderplace/:id'>
       <OrderPlace></OrderPlace>
        </PrivateRoute>
<Route path='/addnewservice'>
       <AddNewService></AddNewService>
        </Route>

      </Switch>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
