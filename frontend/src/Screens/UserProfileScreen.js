import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getUserDetail, updateUserProfile} from "../actions/userActions";
import LoaderBox from "../Components/LoaderBox.js";

export default function UserProfileScreen() {
    const dispatch = useDispatch();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const userLogin = useSelector(state => state.userLogin);
    const [confirmPassword,setConfirmPassword] = useState("");
    const something = useSelector(state => state.userDetail);
    const userProfile = useSelector(state => state.userProfile);
    const {success} = userProfile;
    const {uDetail,loading,error} = something;


    const submitHandler = (e) => {
        e.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords are not matching !");
            return false;
        }
        dispatch(updateUserProfile({userId : uDetail._id,name,email,password}))
        //Dispatch update profile action !

    }


    useEffect(() => {
        if(!uDetail){
        dispatch(getUserDetail());
         }
        else{
         setName(uDetail.name);
        setEmail(uDetail.email); 
         }

    },[dispatch, uDetail]);

    return (
        <div>
            {loading? <LoaderBox></LoaderBox> : error ? <h4 className="alert alert-danger">{error}</h4> : 
            <div className="form-group mt-5 p-5">
            <h3 className="mt-2 mb-5">User Profile</h3>
            {success ? <h4 className="alert alert-success">Successfully Updated !</h4> : ""}
                <form onSubmit={(e) => submitHandler(e)}>
                <label className="font-weight-bold" htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" onChange={e => setName(e.target.value)} value={name} className="form-control  mb-4" />

                <label className="font-weight-bold" htmlFor="Email">Email</label>
                <input type="text" id="Email" onChange={e => setEmail(e.target.value)} value={email}  className="form-control  mb-4"/>

                <label className="font-weight-bold" htmlFor="password">Password</label>
                <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password} className="form-control  mb-4"/>

                <label className="font-weight-bold" htmlFor="passwordConfirm">Confirm Password</label>
                <input type="password" id="passwordConfirm" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} className="form-control  mb-4"/>

                <button className="btn btn-warning w-100 font-weight-bold mt-4" type="submit" style={{color:"black"}}>Update</button>
                </form>
            </div>
            }
        </div>
    )
}
