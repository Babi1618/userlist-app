import { communicationChat, menuMoreIcon } from "../../icons/button-icons";
import { CustomButton } from "./CustomButton";

export const Card = ({ user, gridColumns, photoWidth }: any) => {
  console.log(user);
  return (
    <div className="card-container" style={{ gridColumn: gridColumns }}>
      <div className="card-content">
        <div className="card-photo-button">
          <div className="card-photo">
            <div
              className="photo-container"
              style={{ width: photoWidth, height: photoWidth }}
            >
              <img
                className="photo"
                src={`${
                  user.img
                    ? user.img
                    : "https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256_1280.png"
                }`}
              />
            </div>
            <div
              className={`user-active-or-not ${
                user.online === false ? "user-inactive" : ""
              }`}
            ></div>
          </div>
          {photoWidth === 56 && (
            <div className="card-icons">
              <CustomButton
                className="send-message-button"
                icon={communicationChat}
                iconWidth={16}
                iconColor="#7A8194"
                onClick={() => console.log("click Arrow left")}
              />
              <CustomButton
                className="menu-more-button"
                icon={menuMoreIcon}
                iconWidth={16}
                iconColor="#4A4F5E"
                onClick={() => console.log("More")}
              />
            </div>
          )}
        </div>
        <div className="card-user-data">
          <div>
            {user.name} {user.last_name}
          </div>
          <div>{user.e_mail}</div>
        </div>
      </div>
    </div>
  );
};
