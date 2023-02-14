import { useAppContext } from "../../context/AppContext";
import { MoreIcon } from "../../icons/MoreIcon";
import { PlusIcon } from "../../icons/PlusIcon";
import { CustomButton } from "../general/CustomButton";
import { MyDetailSelect } from "../MyDetailsSelect";
import { UsersTab } from "../UsersTab";

export const Header = () => {
  const { isMobile } = useAppContext() as any;
  return (
    <div className="users-list-section-container">
      <div className="users-list-section">
        <div className="title-and-more-users">
          <div id="users-list-section-title">Users</div>
          <div className="header-actions">
            <CustomButton
              className="add-new-button label-button"
              icon={PlusIcon}
              iconWidth={20}
              iconColor={"white"}
              label="Add New..."
              onClick={() => console.log("Add new click!")}
            />
            <CustomButton
              className="more-button"
              icon={MoreIcon}
              iconWidth={20}
              iconColor="#4A4F5E"
              onClick={() => console.log("more... click")}
            />
          </div>
        </div>
        {isMobile && <MyDetailSelect />}
        {!isMobile && <UsersTab />}
      </div>
    </div>
  );
};
