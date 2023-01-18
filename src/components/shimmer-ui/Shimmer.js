import React from "react";
import "./shimmer.css";

const ShimmerCard = () => {
  return (
    <>
      <div className="shimmer-card">
        <div className="shimmer-card-img">
          <div className="img" />
        </div>
        <div className="shimmer-card-desc">
          <div className="line line-3" />
          <div className="line line-3" />
          <div className="line line-3" />
        </div>
      </div>
    </>
  );
};

export default ShimmerCard;
