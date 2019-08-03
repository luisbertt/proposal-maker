import React from "react";

const Logo = ({ src, width, height }) => (
  <div>
    <img src={src} alt="Company Logo" width={width} height={height} />
  </div>
);

export default Logo;
