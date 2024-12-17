import React, { useState } from "react";

const FeedbackForm = ({ service, onFeedbackSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && rating && comment) {
      const isValidEmail = /\S+@\S+\.\S+/.test(email);
      if (isValidEmail) {
        onFeedbackSubmit({ service, name, email, rating, comment });
        setName("");
        setEmail("");
        setRating(0);
        setComment("");
      } else {
        alert("Please enter a valid email address.");
      }
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 text-white max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-semibold text-center">Submit Feedback</h2>

      <label className="block">
        <span>Name:</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-md"
        />
      </label>

      <label className="block">
        <span>Email:</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-md"
        />
      </label>

      <label className="block">
        <span>Rating (1-5):</span>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-md"
        />
      </label>

      <label className="block">
        <span>Comment:</span>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-md"
        />
      </label>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md text-white font-medium"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
