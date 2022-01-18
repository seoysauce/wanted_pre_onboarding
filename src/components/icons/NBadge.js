import React from "react";

const NBadge = () => {
  return (
    <span
      className="Badge"
      style={{
        backgroundColor: "rgb(51, 102, 255)",
        width: "13px",
        height: "13px",
      }}>
      <svg className="" width="5" height="5" viewBox="0 0 6 6">
        <g fill="#fff" fillRule="nonzero">
          <path
            d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z"
            transform="translate(-123 -375) translate(20 365) translate(98 5)"
          />
        </g>
      </svg>
    </span>
  );
};

export default NBadge;
