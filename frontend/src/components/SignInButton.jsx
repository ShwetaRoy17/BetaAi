import React from "react";
import { useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase.js';
import { NavLink } from "react-router-dom";
import profile from "../assets/profile.png"
import {updateUserInformation,updateloggedIn} from "../features/user.Slice.js"
import { useSelector,useDispatch } from "react-redux";


const Signin = ()=>{
  const isLoggedIn=useSelector((state)=>state.User.loggedIn);
  
const dispatch = useDispatch();

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      if (result) {
        console.log("the result it",result);
        const {displayName, email,photoURL} = result
        dispatch(updateUserInformation({ displayName, email,photoURL }))
        dispatch(updateloggedIn(true));
      } else {
        dispatch(updateloggedIn(false))
      }

    })

    return () => unsubscribe();
  },[])
  
  const SignUpUsingGoogle = () => {

    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {

        const { displayName, email,photoURL } = result.user;
        dispatch(updateUserInformation({ displayName, email,photoURL }))

        updateloggedIn(true)
      }).catch((error) => {

        console.log({ error });

      });
  }

  const name = useSelector((state)=>state.User.name)
  const imageUrl = useSelector((state)=>state.User.imageUrl)


  return(
    <div className="">
      {!isLoggedIn &&
        <div className=" md:ml-[2vw] flex items-center text-white hover:text-gray-200" onClick={SignUpUsingGoogle}>
          <img
            src={profile}
            alt="profile"
            className="h-[8vw] w-[8vw] md:h-[40px] md:w-[40px] md:mr-[30px]"
          />
        </div>
        }

        {isLoggedIn && <NavLink to="/profile">
        <div className=" md:ml-[2vw] flex flex-col items-center text-white hover:text-gray-200" onClick={Signin}>
          <img
            src={imageUrl}
            alt="profile"
            className="h-[7vw] w-[7vw] md:h-[30px] md:w-[30px] rounded-full md:mr-[30px]"
          />
          <p className="font-serif text-[1vw]">Hello,{name}</p>
        </div>
        </NavLink>}

    </div>
  )
}
export {Signin};