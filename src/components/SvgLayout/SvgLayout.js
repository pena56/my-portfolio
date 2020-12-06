import React from 'react';

function SvgLayout() {
  return (
    <div
      className="svg__container"
      style={{
        height: '70px',
        transform: 'translateZ(0px)',
      }}
    >
      <svg
        className="svg__style"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      ></svg>

      {/* <polygon
        className="text__gray fill__current"
        points="2560 0 2560 100 0 100"
      ></polygon> */}
    </div>
  );
}

export default SvgLayout;
