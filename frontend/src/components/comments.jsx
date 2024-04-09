import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import profile from "../assets/profile.png";
import linkicon from "../assets/linkFileIcon.png";
import { useParams } from "react-router-dom";



// const firestore = firebase.firestore();
const Comment = () => {
  const { matchId } = useParams();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  const isLogged = useSelector((state) => state.User.loggedIn);

  // useEffect(() => {
  //   const fetchComments = async () => {
  //     try {
  //       setIsLoading(true);
  //       const snapshot = await firestore
  //         .collection("comments")
  //         .where("matchId", "==", `${matchId}`)
  //         .orderBy("createdAt", "asc")
  //         .get();
  //       const commentsData = snapshot.docs.map((doc) => doc.data());
  //       setComments(commentsData);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsLoading(true);
  //       console.error("Error fetching comments:", error);
  //     }
  //   };
  //   fetchComments();
  // });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Add the new comment to Firestore
  //   try {
  //     const res = await firestore.collection("comments").add({
  //       Email: userEmail,
  //       userName: userName,
  //       userImage: userImg,
  //       matchId: matchId,
  //       comment: comment,
  //       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //     });
  //     if(res){
  //       alert("comment sended successfully")
  //     }
  //     // Clear the comment input field after posting
  //     setComment("");
  //   } catch (error) {
  //     console.error("Error posting comment:", error);
  //   }
  // };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const userEmail = useSelector((state) => state.User.email);
  const userImg = useSelector((state) => state.User.imageUrl);
  const userName = useSelector((state) => state.User.name);
  return (
    <>
      <div className="w-[100%]  md:h-[60vh] px-[10vw] mt-[4vh] font-serif overflow-y-auto">
        <div className="bg-white flex flex-col rounded-[8px] mx-auto h-full px-[3vw]">
          <h1 className="text-black font-serif font-[600] text-[10px] md:text-[2vw] my-[1vh]">
            Comments
          </h1>

          <div className="grid grid-rows-1 items-start mb-4 focus-within:border-purple-500 focus-within:border-2 rounded-lg shadow-md p-2">
            <div className="flex flex-row justify-start p-4 items-center font-source">
              <img
                src={userImg ? userImg : profile}
                alt="profile"
                className="h-[40px] w-[40px] rounded-full"
              />
              <span>{userName ? userName.toLowerCase() : "User"}</span>
            </div>
            <div className="w-full rounded-b-lg shadow-md">
              <textarea
                className="w-full px-4 py-3 text-gray-700 bg-white rounded-t-lg focus:outline-none "
                placeholder="Write a comment..."
                value={comment}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center w-full justify-between px-4 py-1 h-[44px] ">
              <div>
                <label
                  htmlFor="imageUpload"
                  className="flex items-center cursor-pointer"
                >
                  <img src={linkicon} className="h-[2.5vw] w-[2.5vw]" />
                  <input type="file" id="imageUpload" className="hidden" />
                </label>
              </div>
              {isLogged && (
                <form >
                  <button
                    className="text-white h-full bg-[#4629F2] p-[1vw,2vw,1vw,2vw] hover:bg-pup4 hover:text-pup1 rounded-[8px] "
                    type="submit"
                  >
                    Comment
                  </button>
                </form>
              )}
            </div>
          </div>
         
              <button
                className="text-center w-full p-[10px] rounded-[6px] bg-[#F1F2F3] font-[600] mb-[2vh]"
                onClick={() => alert("load more comments")}
              >
                Load More Comments
              </button>
            
        </div>
      </div>
    </>
  );
};

export default Comment;
