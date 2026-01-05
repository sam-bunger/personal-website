export const VXNLogo = (props: { fn?: () => void; blog?: boolean }) => {
  const { fn } = props;
  return (
    <svg
      className="logo"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 518.72 141.65"
      onClick={fn}
    >
      <circle
        cx="503.12"
        cy="126.05"
        r="15.6"
        style={props.blog ? { fill: "rgb(201 115 214)" } : { fill: "#009cdf" }}
      />
      <polygon points="138.55 0 121.47 0 80.1 97.23 38.11 0 0 0 63.33 141.65 98.81 141.61 99.3 141.65 101.35 136.85 159.58 0 138.55 0" />
      <path
        d="M372.29,148.08H336V7.79h73.65c8.77,0,24.9.76,31.14,3.43,6.47,2.78,13.77,7.4,17.93,12.48A52.17,52.17,0,0,1,468.11,42a82.88,82.88,0,0,1,3.19,23.71v82.36H435V70.16q0-14.7-6.52-21.78c-4.26-4.62-11.21-6.09-19.32-6.14l-37,.25"
        transform="translate(-6.16 -6.79)"
      />
      <path
        d="M224,76.85,176,7.91H220.3l25.47,38.91h2l24-38.91h45.77L268.36,76.85l49.21,71.23H273.51l-26.32-40h-2l-25.46,40H175.39Z"
        transform="translate(-6.16 -6.79)"
      />
    </svg>
  );
};
