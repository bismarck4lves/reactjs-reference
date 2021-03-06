import { useThemeContext } from "contexts/ThemeContext";
import React from "react";

const Logo: React.FC = (props) => {
  const { theme } = useThemeContext();
  const main = theme.palette.primary.main;
  const background = theme.palette.secondary.main;

  return (
    <svg
      width="208"
      height="211"
      viewBox="0 0 208 211"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2_2)" filter="url(#filter0_d_2_2)">
        <path
          d="M4 20C4 8.9543 12.9543 0 24 0H184C195.046 0 204 8.95431 204 20V182.685C204 193.73 195.046 202.685 184 202.685H24C12.9543 202.685 4 193.73 4 182.685V20Z"
          fill={background}
        />
        <path
          d="M103.845 118.168C113.082 118.168 120.57 110.58 120.57 101.219C120.57 91.8583 113.082 84.2699 103.845 84.2699C94.6085 84.2699 87.1206 91.8583 87.1206 101.219C87.1206 110.58 94.6085 118.168 103.845 118.168Z"
          fill={main}
        />
        <path
          d="M103.845 66.7606C126.296 66.7606 147.155 70.026 162.879 75.5096C181.826 82.119 193.477 92.1395 193.477 101.213C193.477 110.668 181.129 121.316 160.784 128.144C145.403 133.308 125.157 136.008 103.845 136.008C81.9916 136.008 61.304 133.476 45.7455 128.088C26.0639 121.271 14.2085 110.489 14.2085 101.213C14.2085 92.2123 25.3343 82.2702 44.0156 75.672C59.8007 70.0989 81.1736 66.7606 103.845 66.7606V66.7606Z"
          stroke={main}
          stroke-width="10"
          stroke-miterlimit="10"
        />
        <path
          d="M74.2484 84.0906C85.4626 64.3801 98.6777 47.6997 111.224 36.6374C126.34 23.3065 140.727 18.0862 148.481 22.6176C156.562 27.3394 159.497 43.4988 155.169 64.7777C151.897 80.8643 144.093 99.9812 133.443 118.695C122.527 137.879 110.025 154.778 97.6497 165.745C81.9917 179.619 66.8477 184.638 58.922 180.005C51.2284 175.508 48.288 160.776 51.9746 141.077C55.0918 124.419 62.918 103.992 74.2484 84.0906V84.0906Z"
          stroke={main}
          stroke-width="10"
          stroke-miterlimit="10"
        />
        <path
          d="M74.2759 118.734C63.0284 99.0402 55.368 79.1112 52.1734 62.5709C48.3266 42.6418 51.0459 27.401 58.7947 22.8584C66.8697 18.1198 82.1463 23.6146 98.1746 38.0377C110.295 48.9432 122.737 65.3435 133.415 84.0402C144.364 103.207 152.571 122.621 155.76 138.96C159.801 159.639 156.529 175.44 148.608 180.084C140.92 184.593 126.86 179.821 111.859 166.742C99.1916 155.691 85.6338 138.618 74.2759 118.734V118.734Z"
          stroke={main}
          stroke-width="10"
          stroke-miterlimit="10"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2_2"
          x="0"
          y="0"
          width="208"
          height="210.685"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_2"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_2_2">
          <rect
            width="200"
            height="202.685"
            fill="white"
            transform="translate(4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;
