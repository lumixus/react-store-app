import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import LoaderBox from '../Components/LoaderBox';


export default function RegisterScreen(props) {
    const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [confirmPassword,setConfirmPassword] = useState('');
const [name,setName] = useState('');
const redirect = "/";
const userRegister = useSelector((state) => state.userRegister);
const {userInfo, loading} = userRegister;
const dispatch = useDispatch();
const submitHandler = (e) =>  {
    e.preventDefault();
        if(password !== confirmPassword)
        {
            alert("Password and confirm password are not mathcing !");
            return;
        }
    dispatch(register(name,email,password));
};

useEffect(() => {
    if(userInfo){
    props.history.push(redirect);
    }
},[userInfo,props.history,redirect]);
    return (
        <div>
             <div className="card w-100 mt-4 p-5">
                <h4 className="card-title text-center">Register</h4>
                <div className="card-body">
                    <form action="" onSubmit={submitHandler}>
                    <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" placeholder="Enter your name..." onChange={(e) => setName(e.target.value)} className="form-control" autoComplete="off"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-Mail</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email address..." onChange={(e) => setEmail(e.target.value)} className="form-control" autoComplete="off"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordConfirm">Password Confirm</label>
                                <input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Enter your password" onChange={(e) => setConfirmPassword(e.target.value)} className="form-control"/>
                            </div>
                         
                            <button className="btn btn-success">{loading? (<LoaderBox></LoaderBox>) : "Register"}</button>

                            </form>
                         
                </div>

            </div>
        </div>
    )
}
