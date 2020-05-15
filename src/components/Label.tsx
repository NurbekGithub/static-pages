import React from "react";

export default function Label(props) {
  const { deg, children, ...dStyle } = props;
  return (
    <div
      style={{
        position: "absolute",
        textAlign: 'center',
        ...dStyle,
        transform: deg ? `rotateZ(${deg}deg)` : undefined,
      }}
    >
      {children}
    </div>
  );
}
