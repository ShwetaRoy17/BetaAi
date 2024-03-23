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
      <button
        type="button"
        className="inline-flex items-center py-2 px-2 text-sm font-medium text-center text-gray-500 hover:text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:ring-blue-600"
        onClick={handleUpvote}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8v10h-4v2m4-4H6v-6a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v6h2v-2z" />
        </svg>
      </button>
      <span className="text-lg font-bold">{voteCount}</span>
      <button
        type="button"
        className="inline-flex font-source font-[600] text-[14px] text-[#00000066] hover:text-gray-700 focus:ring-4 focus:outline-none focus:ring-red-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:ring-red-600"
        onClick={handleDownvote}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14v-10h4v2m-4 4h8v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-6h-8v2z" />
        </svg>
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

  const [displayedComments, setDisplayedComments] = useState([]);
  const [hasMoreComments, setHasMoreComments] = useState(comments.length > 1);

  useEffect(() => {
    setDisplayedComments(comments.slice(0, 1));
  }, [comments]);

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
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center font-source">
                <svg
                  class="fill-current w-4 h-4 mr-2"
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
