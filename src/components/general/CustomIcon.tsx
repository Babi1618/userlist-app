export const CustomIcon = ({ icon, width, color, handleClick }: IconProps) => {
  return (
    <svg
      onClick={handleClick}
      width={`${width}`}
      viewBox={`0 0 ${width} ${width}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{ __html: icon }}
    ></svg>
  );
};

interface IconProps {
  icon: string;
  width: number;
  color: string | "none";
  handleClick?: any;
}
