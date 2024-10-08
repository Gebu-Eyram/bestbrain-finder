import React from "react";

const Radar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="100"
      height="100"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full translate3d(0px, 0px, 0px) bg-transparent"
    >
      <defs>
        <clipPath id="clipPath">
          <rect width="512" height="512" x="0" y="0" />
        </clipPath>
        <linearGradient
          id="gradient"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1="-9.038999557495117"
          y1="-120.60199737548828"
          x2="-1.5700000524520874"
          y2="117.4219970703125"
        >
          <stop offset="0%" stopColor="rgb(0,173,139)" />
          <stop offset="20%" stopColor="rgba(0,173,139,0.7)" />
          <stop offset="100%" stopColor="rgba(0,173,139,0.2)" />
        </linearGradient>
        <mask id="mask">
          <path
            fill="url(#maskGradient)"
            d="M-122.42,122.5 C-122.42,122.5 122.42,122.5 122.42,122.5 C122.33,-12.72 12.78,-122.33 -122.42,-122.5 C-122.42,-122.5 -122.42,122.5 -122.42,122.5z"
          />
        </mask>
        <linearGradient
          id="maskGradient"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          x1="-9.038999557495117"
          y1="-120.60199737548828"
          x2="-1.5700000524520874"
          y2="117.4219970703125"
        >
          <stop stopColor="rgb(255,255,255)" offset="0%" stopOpacity="1" />
          <stop stopColor="rgb(255,255,255)" offset="50%" stopOpacity="0.55" />
          <stop stopColor="rgb(255,255,255)" offset="100%" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <g clipPath="url(#clipPath)">
        {/* Radar Circles */}
        <g transform="translate(256, 256)">
          <circle
            cx="0"
            cy="0"
            r="180"
            stroke="rgb(44,44,44)"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="0"
            cy="0"
            r="106"
            stroke="rgb(44,44,44)"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="0"
            cy="0"
            r="245"
            stroke="rgb(44,44,44)"
            strokeWidth="2"
            fill="none"
          />
        </g>
        {/* Radar Arm */}
        <g className="radar-arm" transform="rotate(0 256 256)">
          <line
            x1="256"
            y1="256"
            x2="256"
            y2="10"
            stroke="rgb(0,172,138)"
            strokeWidth="4"
          />

          <g transform="translate(380, 128)">
            <path
              fill="url(#gradient)"
              mask="url(#mask)"
              d="M-122.42,122.5 C-122.42,122.5 122.42,122.5 122.42,122.5 C122.33,-12.72 12.78,-122.33 -122.42,-122.5 C-122.42,-122.5 -122.42,122.5 -122.42,122.5z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Radar;
