import React, { useState, useEffect } from 'react';

const AISights = ({  fetchPrediction }) => {
  const isPremium=false;
  const [predictionData, setPredictionData] = useState(null);

  useEffect(() => {
    if (isPremium) {
      const fetchData = async () => {
        const response = await fetchPrediction(); // Call your actual backend function
        setPredictionData(response.data); // Assuming response has prediction data
      };
      fetchData();
    }
  }, [isPremium, fetchPrediction]); // Update on premium state change

  return (
    <div className="w-full h-[200px] md:h-full bg-black dark:bg-gray-900 rounded-lg overflow-hidden shadow-md">
      {isPremium ? (
        <div className="px-4 py-4">
          <h2 className="text-lg font-bold mb-4">Today's Football Match Prediction</h2>
          {/* Display prediction data here based on predictionData */}
          {predictionData && (
            <div>
              <p>Team 1: {predictionData.team1} vs Team 2: {predictionData.team2}</p>
              <p>Predicted Winner: {predictionData.winner}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full bg-black opacity-50 blur">
          <div className="flex flex-col items-center">
            <i className="fas fa-lock text-white text-4xl mb-2"></i>
            <p className="text-white text-lg font-bold z-10">Access Premium Feature</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AISights;
