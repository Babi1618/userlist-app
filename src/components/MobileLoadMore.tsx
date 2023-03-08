import React from 'react'
import { ArrowShortDown } from "../icons/ArrowShortDown";
import { CustomButton } from "./general/CustomButton";

export const MobileLoadMore = ({ handleOtherUsers }: any) => {
  return (
    <div className="mobile-load-more">
      <div className="mobile-load-more-button">
        <CustomButton
          className="arrow-short-down"
          icon={ArrowShortDown}
          iconWidth={24}
          iconColor="#7A8194"
          onClick={() => handleOtherUsers()}
        />
      </div>
      <div>Load more</div>
    </div>
  );
};
