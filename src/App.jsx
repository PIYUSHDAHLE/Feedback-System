import React, { useState, useEffect } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackSummary from "./components/FeedbackSummary";

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [selectedService, setSelectedService] = useState("");

  // Load feedbacks from localStorage
  useEffect(() => {
    const savedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbacks(savedFeedbacks);
  }, []);

  // Save feedbacks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const handleFeedbackSubmit = (feedback) => {
    setFeedbacks([...feedbacks, feedback]);
  };

  const filteredFeedbacks = selectedService
    ? feedbacks.filter((fb) => fb.service === selectedService)
    : feedbacks;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Feedback System</h1>

      <div className="max-w-md mx-auto mb-6">
        <label className="block mb-2">
          <span>Select Service:</span>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 rounded-md"
          >
            <option value="">All Services</option>
            <option value="customerSupport">Customer Support</option>
            <option value="delivery">Delivery</option>
            <option value="productQuality">Product Quality</option>
          </select>
        </label>
      </div>

      <FeedbackForm
        service={selectedService}
        onFeedbackSubmit={handleFeedbackSubmit}
      />

      <div className="mt-8">
        <h2 className="text-2xl mb-4">Feedback List</h2>
        <FeedbackList feedbacks={filteredFeedbacks} />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl mb-4">Feedback Summary</h2>
        <FeedbackSummary feedbacks={filteredFeedbacks} />
      </div>
    </div>
  );
};

export default App;
