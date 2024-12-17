import React from "react";

const FeedbackList = ({ feedbacks }) => {
  return (
    <ul className="space-y-3 text-white">
      {feedbacks.map((feedback, index) => (
        <li
          key={index}
          className="p-4 bg-gray-700 rounded-md shadow-md hover:bg-gray-600 transition"
        >
          <p>
            <strong className="text-blue-400">{feedback.name}</strong> - Rating:{" "}
            <span className="text-yellow-400">{feedback.rating}</span>
          </p>
          <p>{feedback.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackList;
