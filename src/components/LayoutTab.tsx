import { useState } from "react";
import { gridIcon } from "../icons/gridIcon";
import { MenuBurger } from "../icons/MenuBurger";
import { CustomIcon } from "./general/CustomIcon";

export const LayoutTab = () => {
  const [selected, setSelected] = useState("tab1");
  const handleClick = (id: string) => {
    setSelected(id);
  };

  return (
    <div className="users-tab">
      <SingleTab
        id="tab1"
        icon={MenuBurger}
        handleClick={(e: any) => handleClick(e.target.id)}
        className="users-tab-selected"
      />
      <SingleTab
        id="tab2"
        icon={gridIcon}
        handleClick={(e: any) => handleClick(e.target.id)}
        className=""
      />
    </div>
  );
};

const SingleTab = ({ id, icon, handleClick, className }: LayoutTabProps) => {
  return (
    <div id={id} onClick={handleClick} className={className}>
      <CustomIcon icon={icon} width={20} color="#7A8194" />
    </div>
  );
};

interface LayoutTabProps {
  id: string;
  icon: string;
  handleClick: any;
  className: string;
}
