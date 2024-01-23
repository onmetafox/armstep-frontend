import React from 'react';
import cx from "classnames";
const CommonBtn = ({ onClick, title, className }) => {
  let classNames = cx( 'common-btn', className);
  return (
    <button className={classNames} onClick={onClick}>
      { title }
    </button>
  );
};

export default CommonBtn;