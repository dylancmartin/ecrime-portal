import React from "react";

const getViewBox = name => {
  switch (name) {
    case "ArrowUp":
      return "0 0 121.55 132.81";
    case "ArrowDown":
      return "0 0 121.55 132.81";
    case "Exit":
      return "0 0 91.24 89.61";
    case "Checkmark":
      return "0 0 132.17 181.29";
    default:
      return "0 0 32 32";
  }
};

const getPath = (name, props) => {
  switch (name) {
    case "ArrowUp":
      return (
        <path d="M119.22,55.85,66.5,2.4a8,8,0,0,0-11.45,0L2.33,55.85A8,8,0,0,0,8.06,69.54h25V122A10.84,10.84,0,0,0,43.9,132.81H77.65A10.84,10.84,0,0,0,88.49,122V69.54h25A8,8,0,0,0,119.22,55.85Z" />
      );
    case "ArrowDown":
      return (
        <path d="M2.33,77l52.72,53.46a8,8,0,0,0,11.45,0L119.22,77a8,8,0,0,0-5.73-13.69h-25V10.84A10.84,10.84,0,0,0,77.65,0H43.9A10.84,10.84,0,0,0,33.06,10.84V63.27h-25A8,8,0,0,0,2.33,77Z" />
      );
    case "Exit":
      return (
        <path d="M60.09,44.79l.12-.14L90.83,3.35A2.1,2.1,0,0,0,89.14,0H68.73A2.11,2.11,0,0,0,67,.88l-7.6,10.67c-3.91,5.49-9,12.73-13.12,18.81h-.39c-4.11-6.08-9-13.13-13.12-19L25.39.89A2.1,2.1,0,0,0,23.67,0H2.1A2.1,2.1,0,0,0,.42,3.35l29.89,40.2a2.1,2.1,0,0,1,0,2.5L.42,86.26A2.1,2.1,0,0,0,2.1,89.61H23.67a2.1,2.1,0,0,0,1.72-.89l7.4-10.47c4.11-5.88,9-12.93,13.12-19h.39c4.12,6.07,9.21,13.32,13.12,18.8L67,88.73a2.11,2.11,0,0,0,1.71.88H89.14a2.1,2.1,0,0,0,1.69-3.35L60.21,45Z" />
      );
    case "Checkmark":
      return (
        <polygon
          class="cls-1"
          points="0 107.33 30.5 107.33 55.13 152.13 105.73 0 132.17 0 66.08 181.29 45.86 181.29 0 107.33"
        />
      );
    default:
      return <path />;
  }
};

const SVGIcon = props => (
  <svg
    style={props.style}
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={"" || getViewBox(props.name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(props.name)}
  </svg>
);

export default SVGIcon;
