import React from 'react'
import { arrowDownSelectIcon } from "../icons/button-icons";
import { CustomIcon } from "./general/CustomIcon";

export const MyDetailSelect = () => {
  return (
    <div
      className="custom-select my-details-select"
      onClick={() => console.log("click open select - Mobile (TODO)")}
    >
      <div>My details</div>
      <div>
        <CustomIcon icon={arrowDownSelectIcon} width={20} color="#2B2B40" />
      </div>
    </div>
  );
};
