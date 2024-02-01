import React from 'react';
import arrowImg from "../../assets/images/arrow.svg";
import cx from "classnames";

const ActiveBtn = ({ onClick, className }) => {
  let classNames = cx( 'active-btn', className);
  return (
    <button className={classNames} onClick={onClick}>
      Talk to Us <span className="arrow"><img src={arrowImg} /></span>
    </button>
  );
};

export default ActiveBtn;