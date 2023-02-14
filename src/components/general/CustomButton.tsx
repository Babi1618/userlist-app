import { CustomIcon } from "./CustomIcon";

export const CustomButton = ({
  className,
  icon,
  iconWidth,
  iconColor,
  label,
  onClick,
}: CustomButtonProps) => {
  return (
    <div onClick={onClick} className={`button-container ${className}`}>
      <div className="button-content">
        <div className="button-icon">
          {icon && (
            <CustomIcon icon={icon} width={iconWidth} color={iconColor} />
          )}
        </div>
        <div className="button-label" style={{ color: iconColor }}>
          {label && <span>{label}</span>}
        </div>
      </div>
    </div>
  );
};

interface CustomButtonProps {
  className: string;
  icon: string;
  iconColor: string;
  iconWidth: number;
  label?: string;
  onClick: any;
}
