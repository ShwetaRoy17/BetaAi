import React, { useState, useEffect } from "react";
import { Avatar } from "@material-tailwind/react";

// Reusable Comment component
const Comment = ({ author, authorImage, date, content }) => {
  const [voteCount, setVoteCount] = useState(0);

  const handleUpvote = () => {
    setVoteCount(voteCount + 1);
  };

  const handleDownvote = () => {
    setVoteCount(voteCount - 1);
  };
  return (
    <article className="text-base bg-white rounded-lg dark:bg-gray-900">
      <div className="py-2 bg-white rounded-lg rounded-t-lg dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center gap-4 mb-[2vh]">
          <Avatar
            className="h-[40px] w-[40px] object-cover rounded-full"
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
          />
          <div>
            <h3 className="font-source font-[600] text-[18px] text-black">
              {author}
            </h3>
          </div>
        </div>
      </div>
      <div>
        <p className="font-source font-[400] text-[16px] text-[#00000099]">{content}</p>
      </div>
      <div className="flex flex-row">
      <div className="flex items-center justify-center gap-2">
      <button className="py-1.5  hover:text-green-600 hover:scale-105 hover:shadow text-center rounded-md  h-8 text-[10px] flex items-center gap-1 lg:gap-2">
        {/* <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path strokeLinecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
        </svg> */}
    </button>

    <button className="py-1.5  hover:text-red-600 hover:scale-105 hover:shadow text-center  h-8 text-[10px] flex items-center gap-1 lg:gap-2">
        {/* <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"></path>
        </svg> */}
      &#8593
    </button>
    </div>
        <h3 className="font-source font-[600] text-[14px] text-[#00000066]">{date}</h3>
      </div>
    </article>
  );
};

const Discussion = () => {
//  dummy data
  const comments = [
    { user: "dani", date: "17-12-2001", src: "", message: "hello world" },
    { user: "dani", date: "17-12-2001", src: "", message: "hello world" },
    { user: "dani", date: "17-12-2001", src: "", message: "hello world" },
    { user: "dani", date: "17-12-2001", src: "", message: "hello world" },
  ];

  const [displayedComments, setDisplayedComments] = useState(comments.slice(0,1));
  const [hasMoreComments, setHasMoreComments] = useState(comments.length > 1);

  // useEffect(() => {
  //   setDisplayedComments(comments.slice(0, 1));
  // }, [comments]);
  // setDisplayedComments(comments.slice(0, 1));
  // load more comments function 
  const loadMoreComments = () => {
    const newDisplayedComments = displayedComments.concat(
      comments.slice(displayedComments.length, displayedComments.length + 1)
    );
    setDisplayedComments(newDisplayedComments);
    setHasMoreComments(newDisplayedComments.length < comments.length);
  };

  return (
    <div className="bg-white pt-[2vh]  dark:bg-gray-900  w-[80%] md:w-[72%] mx-auto mt-[7vh]  antialiased px-[3vw] shadow-md rounded-[8px] md:h-[60%]">
      <h2 className="text-[25px] font-serif lg:text-2xl font-[600] text-gray-900 dark:text-white text-left min:my-2 my-[1vh]">
        Comments
      </h2>
      <div>
        <form className="mb-2">
          <div className="py-2 px-4 bg-white rounded-lg rounded-t-lg border border-[#4629F2] dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-[2vh]">
              <Avatar
                className="h-[40px] w-[40px] object-cover rounded-full"
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
              />
              <div>
                <h3 className="font-source font-[600] text-[18px] text-black">
                  Tania Andrew
                </h3>
              </div>
            </div>

            <textarea
              id="comment"
              rows="6"
              className="font-source  resize-none w-full p-0 border-none text-[16px] text-black border-[8px] focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800 h-[4vw] overflow-y-auto"
              placeholder="Write a comment..."
              required
            ></textarea>
            <div className="h-[1px] w-[100%] bg-[#0000001A] my-[1vw]"></div>
            <div className="h-[44px] flex justify-between items-center px-[1vw]">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center font-source">
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Download</span>
              </button>
              <button
                type="submit"
                className="h-[100%] w-[108px] inline-flex items-center py-2.5 px-4 text-[16px] font-source text-center text-white bg-[#4629F2] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                comment
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Discussion comments */}

      {displayedComments.map((comment) => (
        <Comment
          author={comment.user}
          authorImage={comment.image}
          date={comment.date}
          content={comment.message}
        />
      ))}
      {hasMoreComments && (
        <button
          type="button"
          className="w-full bg-gshades8 h-[38px] font-source font-[600] rounded-[10px] border-[1px] text-[14px] hover:bg-[#E0E0E1] focus:ring-[.5px] focus:outline-none focus:ring-black dark:focus:ring-primary-900 mb-[2vh]"
          onClick={loadMoreComments}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Discussion;
