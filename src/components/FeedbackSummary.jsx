import React from "react";

const FeedbackSummary = ({ feedbacks }) => {
  const totalFeedbacks = feedbacks.length;
  const averageRating =
    totalFeedbacks > 0
      ? feedbacks.reduce((sum, feedback) => sum + feedback.rating, 0) /
        totalFeedbacks
      : 0;

  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white">
      <p>Total Feedbacks: {totalFeedbacks}</p>
      <p>Average Rating: {averageRating.toFixed(2)}</p>
    </div>
  );
};

export default FeedbackSummary;
