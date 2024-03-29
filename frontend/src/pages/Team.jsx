import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faShare } from "@fortawesome/free-solid-svg-icons";
import profile from "../assets/profile.png";

const MatchInsights = ({ heading, predictions, otherFields }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md px-4 py-4 h-[46%]">
      <h2 className="text-lg font-bold mb-4">{heading}</h2>
      <div className="flex flex-col border-b border-gray-200 dark:border-gray-700 pb-2">
        {/* Display Match Predictions */}
        {predictions && (
          <>
            <p className="text-sm">Predictions:</p>
            <ul className="list-disc pl-4">
              {predictions.map((prediction, index) => (
                <li key={index}>{prediction}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      {/* Display Other Fields */}
      {otherFields && (
        <div className="mt-2">
          {Object.entries(otherFields).map(([field, value], index) => (
            <p key={index} className="text-sm">
              {field}: {value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

const UserProfileCard = ({ imageUrl, name, title, socialLinks }) => {
  const onEditClick = () => {};
  const onShareClick = () => {};
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
                onClick={onEditClick}
                className="text-gshades1 text-[21px] hover:text-pup1 focus:outline-none mr-[1vw]"
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                type="button"
                onClick={onShareClick}
                className="text-gshades1 text-[21px] hover:text-pup1 focus:outline-none"
              >
                <FontAwesomeIcon icon={faShare} />
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-[33.1vw,48.1vw] gap-5  h-[100%] mx-auto">
      <div className="bg-gradient-to-t from-sfs1 to-sfs5 rounded-lg shadow-md px-4 py-4">
        {UserProfileCard({
          imageUrl: profile,
          name: "shweta Roy",
          title: "hello",
          socialLinks: [{ url: "shere" }],
        })}
      </div>
      <div className=" flex flex-col justify-between">
        {MatchInsights({
          heading: "Overview",
          predictions: [],
          otherFields: {},
        })}
        {MatchInsights({
          heading: "Overview",
          predictions: [],
          otherFields: {},
        })}
      </div>
    </div>
  );
};

export default Profile;
