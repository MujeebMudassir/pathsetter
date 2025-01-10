import React from "react";
import Colors from "../../constants/Colors";

const SvgImage = ({ theme }) => {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 1200 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_0_1)">
        <path
          d="M-12 90.2951C-12 50.8927 218.573 18.9508 503 18.9508H696C980.427 18.9508 1211 50.8927 1211 90.2951H-12Z"
          fill="url(#paint0_linear_0_1)"
          fillOpacity="0.5"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M840.25 43.847C834.7 36.541 826.548 32.3279 817.96 32.3279H380.417C372.285 32.3279 364.629 36.5955 359.75 43.847C354.871 51.0984 347.215 55.3662 339.083 55.3662H5.16667C2.3132 55.3662 0 57.9448 0 61.1257C0 64.3066 2.31318 66.8853 5.16665 66.8853H1194.83C1197.69 66.8853 1200 64.3066 1200 61.1257C1200 57.9448 1197.69 55.3662 1194.83 55.3662H862.54C853.952 55.3662 845.8 51.153 840.25 43.847Z"
        fill="url(#paint1_linear_0_1)"
        fillOpacity="0.8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M840.25 45.7048C834.69 38.6208 826.656 34.5573 818.212 34.5573H380.152C372.171 34.5573 364.639 38.6728 359.75 45.7048C354.861 52.7369 347.329 56.8523 339.348 56.8523H5C4.99154 56.8523 4.98309 56.8524 4.97464 56.8524H0V62.4261V68H30H1170H1200V62.4261V56.8524H1195.03L1195 56.8523H862.288C853.844 56.8523 845.81 52.7889 840.25 45.7048Z"
        fill={`${theme? "#e8fdfb" : "#03091D"}`}
      />
      <defs>
        <filter
          id="filter0_f_0_1"
          x="-36.5"
          y="-5.54919"
          width="1272"
          height="120.344"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="12.25"
            result="effect1_foregroundBlur_0_1"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_1"
          x1="600.697"
          y1="18.9508"
          x2="600.194"
          y2="90.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={Colors.tealColor} stopOpacity="0.06" />
          <stop offset="1" stopColor={Colors.tealColor} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_1"
          x1="0"
          y1="66.886"
          x2="1200"
          y2="66.8861"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={Colors.tealColor} stopOpacity="0" />
          <stop
            offset="0.09"
            stopColor={Colors.tealColor}
            stopOpacity="0.697917"
          />
          <stop
            offset="0.5"
            stopColor={Colors.tealColor}
            stopOpacity="0.760417"
          />
          <stop
            offset="0.666667"
            stopColor={Colors.tealColor}
            stopOpacity="0.760417"
          />
          <stop offset="1" stopColor={Colors.tealColor} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SvgImage;
