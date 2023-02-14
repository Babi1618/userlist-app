import { useAppContext } from "../../context/AppContext";
import { useState } from "react";
import { CardsWrapperMobile } from "../general/CardsWrapperMobile";
import { CardsWrapperDesktop } from "../general/CardsWrapperDesktop";
import { Card } from "../general/Card";
import { NewChat, NewChatOnlineUsers } from "../../icons/NewChat";
import { ArrowLeft } from "../../icons/ArrowLeft";
import { ArrowRigth } from "../../icons/ArrowRigth";
import { LayoutTab } from "../LayoutTab";
import { CustomButton } from "../general/CustomButton";
import { CustomIcon } from "../general/CustomIcon";
import { pointIcon } from "../../icons/button-icons";
import { MockCardChat } from "../MockCardChat";
import { UserList } from "../general/UserList";

export const Main = () => {
  const { isMobile } = useAppContext() as any;
  const [onlineUsers, setOnlineUsers] = useState<any>([]);
  const [usersNumberMobile, setUsersNumberMobile] = useState(0);

  return (
    <>
      <div className="main-container">
        <div className="online-users-carousel">
          <div className="main-box">
            <div>Online Users</div>
            <div>
              <MoreComponent />
              {!isMobile && (
                <div className="online-users-arrow">
                  <CustomButton
                    className="arrow-left"
                    icon={ArrowLeft}
                    iconWidth={24}
                    iconColor="#4A4F5E"
                    onClick={() => console.log("go back")}
                  />
                  <CustomButton
                    className="arrow-rigth"
                    icon={ArrowRigth}
                    iconWidth={24}
                    iconColor="#4A4F5E"
                    onClick={() => console.log("move on")}
                  />
                </div>
              )}
              {isMobile && <NewChatOnlineUsers onClick={() => console.log("new!")} />}
            </div>
          </div>
          <div className="online-users-box">
            <div className="online-users-container">
              <div className="new-chat-card card-container">
                <div>
                  <NewChat onClick={() => console.log("new chat!")} />
                </div>
                <div>New Chat</div>
              </div>
              <MockCardChat />
              <UserList
                users={onlineUsers}
                className="online-users-container"
                photoWidth={44}
              />
            </div>
          </div>
        </div>
        <div className="main-box">
          <div>Users {isMobile ?<span>{usersNumberMobile}</span>:<span>{6}</span>}</div>
          <div>
            <LayoutTab />
          </div>
        </div>
        {isMobile && (
          <CardsWrapperMobile
            setOnlineUsers={setOnlineUsers}
            setUsersNumberMobile={setUsersNumberMobile}
          />
        )}
        {!isMobile && <CardsWrapperDesktop setOnlineUsers={setOnlineUsers} />}
      </div>
    </>
  );
};

const MoreComponent = () => {
  const [selected, setSelected] = useState("point1");
  const handleClick = (id: string) => {
    setSelected(id);
  };

  return (
    <div className="online-users-scroll">
      <CustomIcon
        icon={pointIcon}
        width={8}
        handleClick={() => handleClick("point1")}
        color={selected === "point1" ? "#5D5FEF" : "#DEE2E8"}
      />
      <CustomIcon
        icon={pointIcon}
        width={8}
        handleClick={() => handleClick("point2")}
        color={selected === "point2" ? "#5D5FEF" : "#DEE2E8"}
      />
      <CustomIcon
        icon={pointIcon}
        width={8}
        handleClick={() => handleClick("point3")}
        color={selected === "point3" ? "#5D5FEF" : "#DEE2E8"}
      />
      <CustomIcon
        icon={pointIcon}
        width={8}
        handleClick={() => handleClick("point4")}
        color={selected === "point4" ? "#5D5FEF" : "#DEE2E8"}
      />
    </div>
  );
};
