import React from "react";

const Btn = ({
  onClick,
  type = "button",
  classN = "",
  children,
  startIcon,
  endIcon,
}) => {
  return (
    <button onClick={onClick} type={type} className={classN}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};

export default Btn;
