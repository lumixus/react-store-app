import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../actions/userActions';
import LoaderBox from '../Components/LoaderBox';



export default function LoginScreen(props) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const state = useSelector(state => state.userLogin);
    const {userInfo,loading} = state; 
    const redirect = "/";
    const {error} = state;
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(userLogin(email,password));
    }

    useEffect(() => {
        if(userInfo){
        props.history.push(redirect);
    }
    
    }, [props.history,redirect,userInfo]);
    return (
        <div>
            
            <div className="card w-100 mt-4 p-5">
                <h4 className="card-title text-center">Login</h4>
                <div className="card-body">
                    <form action="" onSubmit={submitHandler}>
                            <div className="form-group">
                                <label htmlFor="email">E-Mail</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email address..." onChange={(e) => setEmail(e.target.value)} className="form-control" autoComplete="off"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} className="form-control"/>
                            </div>
                            <button className="btn btn-success">{loading? (<LoaderBox></LoaderBox>) : "Login !"}</button>

                            </form>
                            {error ? (<div className='alert alert-danger'>{error}</div>) : ''}
                </div>

            </div>
        </div>
    )
}
