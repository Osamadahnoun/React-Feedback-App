import React, { useState } from "react";
import FeedbackItem from "../FeedbackItem/FeedbackItem";
import PropTypes from "prop-types";

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <div key={item.id}>
          <FeedbackItem item={item} handleDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
