import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { userLogout } from '../actions/userActions';

export default function Navbar() {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;
    const logout = (e) => {
        e.preventDefault();
        dispatch(userLogout());
    }

    return (
        <div className="mb-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#">Players Zone</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/favourites">Favourites</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/cart">Cart</Link>
      </li>
      {!userInfo? (<li className="nav-item">
        <Link className="nav-link" to="/register">Register</Link>
      </li>) : ''}
      
      <li className="nav-item">
          {userInfo ? (<Link className="nav-link" to="/profile">{userInfo.data.name}</Link>) : (<Link className="nav-link" to="/login">Login</Link>)}
      </li>

      {userInfo && userInfo.data.isAdmin && (
      
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard">Admin</Link>
      </li>
      
      )}
      
      <li className="nav-item">
          {userInfo ? (<Link className="nav-link" to="/orderhistory">My Orders</Link>) : ""}
      </li>
      {userInfo ?   ( <li className="nav-item">
        <Link className="nav-link" onClick={logout}>Logout</Link>
      </li>) : ""}
     

    </ul>
    
  </div>
</nav>
        </div>
    )
}
