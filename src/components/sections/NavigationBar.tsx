import brand from "../../assets/brand.png";
import { useAppContext } from "../../context/AppContext";
import {
  calendarIcon,
  commandIcon,
  filterIcon,
  menuIcon,
  searchIcon,
} from "../../icons/button-icons";
import { CustomButton } from "../general/CustomButton";

export const NavigationBar = () => {
  const { isMobile } = useAppContext() as any;
  return (
    <div className="navigation-container">
      <div className="navigation-items">
        {isMobile && (
          <div id="brand-image">
            <img src={brand} alt="brand" />
          </div>
        )}

        <div className="nav-search">
          <div className="search-bar">
            <CustomButton
              className="search-bar-button"
              icon={searchIcon}
              iconWidth={24}
              iconColor="#7A8194"
              onClick={() => console.log("click search")}
            />
            <input type="text" placeholder="Search..." />
            {!isMobile && (
              <CustomButton
                className="find-button label-button"
                icon={commandIcon}
                iconWidth={16}
                iconColor="#7A8194"
                onClick={() => console.log("Find click")}
                label="F"
              />
            )}
          </div>
        </div>
        {isMobile && (
          <CustomButton
            className="menu-button"
            icon={menuIcon}
            iconWidth={26}
            iconColor="#4A4F5E"
            onClick={() => console.log("toggler click")}
          />
        )}
        {!isMobile && (
          <div className="nav-filters-calendar">
            <CustomButton
              className="filter-button label-button"
              icon={filterIcon}
              iconWidth={18}
              iconColor="#7A8194"
              onClick={() => console.log("toggler click")}
              label="Filters"
            />
            <CustomButton
              className="calendar-button"
              icon={calendarIcon}
              iconWidth={18}
              iconColor="#7A8194"
              onClick={() => console.log("toggler click")}
            />
          </div>
        )}
      </div>
    </div>
  );
};
