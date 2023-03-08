import { useState } from "react";

import React from 'react'
export const UsersTab = () => {
  const [selected, setSelected] = useState("tab1");
  const handleClick = (id: string) => {
    console.log("user TAB: (TODO)");
    setSelected(id);
  };

  return (
    <div className="users-tab">
      <SingleTab
        id="tab1"
        label="All"
        handleClick={(e: any) => handleClick(e.target.id)}
        className={selected === "tab1" ? "users-tab-selected" : ""}
      />
      <SingleTab
        id="tab2"
        label="Online"
        handleClick={(e: any) => handleClick(e.target.id)}
        className={selected === "tab2" ? "users-tab-selected" : ""}
      />
      <SingleTab
        id="tab3"
        label="Offline"
        handleClick={(e: any) => handleClick(e.target.id)}
        className={selected === "tab3" ? "users-tab-selected" : ""}
      />
      <SingleTab
        id="tab4"
        label="Archived"
        handleClick={(e: any) => handleClick(e.target.id)}
        className={selected === "tab4" ? "users-tab-selected" : ""}
      />
    </div>
  );
};

const SingleTab = ({ id, label, handleClick, className }: SingleTabProps) => {
  return (
    <div id={id} onClick={handleClick} className={className}>
      {label}
    </div>
  );
};

interface SingleTabProps {
  id: string;
  label: string;
  handleClick: any;
  className: string;
}
