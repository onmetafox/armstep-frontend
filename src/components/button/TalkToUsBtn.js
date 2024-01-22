import React from 'react';

const TalkToUsButton = ({ onClick }) => {
  return (
    <button className="talk-to-us-btn" onClick={onClick}>
      Talk to Us <span className="arrow">{'>'}</span>
    </button>
  );
};

export default TalkToUsButton;