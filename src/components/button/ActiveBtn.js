import React from 'react';
import cx from "classnames";
const TalkToUsButton = ({ onClick, className }) => {
  let classNames = cx( 'active-btn', className);
  return (
    <button className={classNames} onClick={onClick}>
      Talk to Us <span className="arrow">{'>'}</span>
    </button>
  );
};

export default TalkToUsButton;