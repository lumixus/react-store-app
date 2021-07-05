
import HomeScreen from "./Screens/HomeScreen";
import PlayerScreen from "./Screens/PlayerScreen";
import FavouriteScreen from "./Screens/FavouriteScreen";
import {BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import LoginScreen from "./Screens/LoginScreen";
import Navbar from "./Components/Navbar";
import RegisterScreen from "./Screens/RegisterScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import ShippingAddressScreen from "./Screens/ShippingAddressScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import OrderScreen from "./Screens/OrderScreen";
import OrderHistoryScreen from "./Screens/OrderHistoryScreen";
import UserProfileScreen from "./Screens/UserProfileScreen";
import DashboardScreen from "./Screens/DashboardScreen";

function App() {





  return (
    <BrowserRouter>
  
     <Navbar></Navbar>
     <div className="App container">
    <Route path="/player/:id" component={PlayerScreen} ></Route>
    <Route path="/product/:id" component={ProductScreen} ></Route>
    <Route path="/favourites/:id?" component={FavouriteScreen} ></Route>
    <Route path="/cart/:id?" component={CartScreen} ></Route>
    <Route path="/" component={HomeScreen} exact></Route>
    <Route path="/login" component={LoginScreen} ></Route>
    <Route path="/register" component={RegisterScreen} ></Route>
    <Route path="/shipping" component={ShippingAddressScreen} ></Route>
    <Route path="/payment" component={PaymentScreen} ></Route>
    <Route path="/placeorder" component={PlaceOrderScreen} ></Route>
    <Route path="/order/:id" component={OrderScreen} ></Route>
    <Route path="/orderhistory" component={OrderHistoryScreen} ></Route>
    <Route path="/profile" component={UserProfileScreen} ></Route>
    <Route path="/dashboard" component={DashboardScreen} ></Route>
      

    </div>
    </BrowserRouter>
  );
}






export default App;
