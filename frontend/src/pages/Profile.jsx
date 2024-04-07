import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import {useSelector,useDispatch} from 'react-redux'
import { auth } from '../utils/firebase.js';
import {unsetUserInformation} from '../features/user.Slice.js'
import { useNavigate } from "react-router-dom";
import {signOut} from "firebase/auth"


const UserProfileCard = ({ imageUrl, name, title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Logout = () => {

    signOut(auth).then(() => {
      alert("hello");
      // Sign-out successful.t
      dispatch(unsetUserInformation());
      navigate('/home')
    }).catch((error) => {
      // An error happened.
      console.log("user not logged out",error);
    });
  }
  return (
    <div className="w-96 px-6 py-6 text-center  rounded-lg lg:mt-0 xl:px-10">
      <div className="space-y-4 xl:space-y-6 border ">
        <img
          className="mx-auto rounded-full h-36 w-36 object-cover border border-gshades1"
          src={imageUrl}
          alt="Author Avatar"
        />
        <div className="space-y-2">
          <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
            <h3 className="text-white">{name}</h3>
          </div>
          <div className="flex flex-col justify-center mt-5 space-x-5">
            <div className="flex items-center space-x-2 justify-center ">
             
              <button
                type="button"
                onClick={()=>Logout()}
                className="text-gshades1 text-[21px] hover:text-pup1  focus:outline-none"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="ml-2" />
                {/* <span className="text-black invisible hover:visible text-sm">
                  Logout
                </span> */}
                Logout
              </button>
            </div>
            <div className="bg-gshades7 rounded-md mt-[1vh] mx-auto shadow-lg">
              <p className="font-serif text-left p-2 text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                aliquam necessitatibus nulla perferendis tempora quam incidunt
                distinctio cumque consectetur. Maxime iure libero commodi atque
                blanditiis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  
  const email = useSelector((state) => state.User.email);
  const imageUrl = useSelector((state) => state.User.imageUrl);
  const name = useSelector((state) => state.User.name);

  console.log("user",email,imageUrl,name);
  return (
    <div className="grid grid-cols-1 md:grid-cols-[33.1vw,48.1vw] gap-5  h-[100%] mx-auto">
      <div className="bg-gradient-to-t from-sfs1 to-sfs5 rounded-lg shadow-md px-4 py-4">
        {UserProfileCard({
          imageUrl: imageUrl,
          name: name,
          title: "Welcome !!",
          socialLinks: [{ url: email}],
        })}
      </div>
      <div className=" flex flex-col justify-between">
       
      </div>
    </div>
  );
};

export default Profile;
