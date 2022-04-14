import React, { useState } from "react";
import FeedbackItem from "../FeedbackItem/FeedbackItem";

const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <div key={item.id}>
          <FeedbackItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
