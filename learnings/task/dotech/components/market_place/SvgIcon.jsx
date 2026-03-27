import Svg, { Path } from "react-native-svg";

export default function SvgComponent({ color = "#ffffff", ...props }) {
  return (
    <Svg
      height={60}
      width={75}
      viewBox="0 0 75 60 "
      style={{ transform: [{ translateY: -20 }] }} // Moves the icon upward
      {...props}
    >
      <Path
        d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
        fill={color}
        // transform="translate(12, 12) scale(0.8)"
      />
    </Svg>
  );
}
