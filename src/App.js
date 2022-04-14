import React, { useState } from "react";
import Header from "./components/Header/Header";
import FeedbackList from "./components/FeedbackList/FeedbackList";
import FeedbackData from "./data/FeedbackData";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
};

export default App;
