import React, { useState, useEffect } from "react";
import logoUrl from "../assets/betaAiBot.png";



const Chatbot = () => {
  const name = "BETAI BOT";
  const description = "LIVE AI POWERED PREDICTION BOT";
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = async () => {
    if (!userInput) return;

    // Simulate sending user input to API (replace with actual API call)
    const response = await simulateAsyncFunction(userInput);

    setChatHistory((prevHistory) => [
      ...prevHistory,
      { user: true, message: userInput },
    ]);
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { user: false, message: response },
    ]);
    setUserInput("");
  };

  const simulateAsyncFunction = async (query) => {
    // Replace with your actual API call logic
    return new Promise((resolve) =>
      setTimeout(() => resolve(`Got it! You said: ${query}`), 1000)
    );
  };

  useEffect(() => {
    // Simulate fetching initial message (optional)
    setChatHistory([{ user: false, message: "Welcome! How can I help you?" }]);
  }, []);

  return (

    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full">
      {/* logo and chatbot name */}
      <div className="flex flex-col items-left  py-3 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-suppcol6 to-suppcol1 p-[30px] h-[33%]">
        <div className="rounded-full bg-white w-[60px] h-[60px] gap-[8px] py-[10px]">
          <img
            src={logoUrl}
            alt="Chatbot Logo"
            className="w-[40px] h-[40px]  mx-auto"
          />
        </div>
        <div className="text-left">
          <h3 className="text-[30px]  font-bold font-serif text-white">
            {name}
          </h3>
          <p className="text-[16px] font-[400] font-serif text-white dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
      {/* message display section */}
      <div className="flex-grow overflow-y-auto px-4 py-4 h-[44vh]">
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={`flex items-end mb-2 ${
              message.user ? "justify-end" : "justify-start"
            }`}
          >
            {message.user?(
                <div
                className={"px-4 py-2 rounded-lg text-sm font-source bg-pup1 text-white"}
              >
                {message.message}
              </div>
            ):(
                <div className="flex flex-row">
                    <div className="h-[40px] w-[40px] mr-[1vw]">
                        <img src={logoUrl} alt="logo url" className="h-[40px] w-[40px]"/>
                    </div>
                    <div>
                        <h1  className="font-source font-[600] text-[16px] text-[#0D082C]">Betai</h1>
                        <div
                className="px-4 py-2 rounded-lg text-sm font-source bg-[#F1F7FF] dark:bg-gray-700 text-[#0D082C]">
                {message.message}
              </div>
                    </div>
                </div>
            )}
            
            <div
              className={`text-[14px] font-source font-[400] text-[#0D082C66] ${
                message.user ? "text-right" : ""
              }`}
            >
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        ))}
      </div>
      {/* text region */}
      <div className="flex items-center justify-between px-[20px] py-[30px] border-t border-gray-200 dark:border-gray-700 h-[2vh] ">
        <div className="h-[24px] w-[24px] bg-black"></div>
        <textarea
          type="text"
          value={userInput}
          onChange={handleUserInput}
          className="flex-grow font-source overflow-auto text-[16px] font-[400] px-1 rounded-[0px 0px 8px 8px]  h-[24px]  focus:outline-none focus:ring-pup1 focus:ring-opacity-50 dark:focus:ring-gray-500"
          placeholder="Reply..."
        />
        <button
          type="button"
          disabled={!userInput}
          onClick={handleSendMessage}
          className="h-[40px] w-[40px] inline-flex items-center pl-[10px] text-[40px] font-[600] text-center text-white bg-pup1 rounded-full hover:bg-blue-700 focus:ring-[1px] focus:outline-none focus:ring-pup1 "
        >
        {String.fromCharCode(62)}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
