import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "../FeedbackItem/FeedbackItem";
import PropTypes from "prop-types";

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <div key={item.id}>
  //         <FeedbackItem item={item} handleDelete={handleDelete} />
  //       </div>
  //     ))}
  //   </div>
  // );
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
