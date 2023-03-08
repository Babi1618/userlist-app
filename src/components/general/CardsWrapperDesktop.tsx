import { gridColumns } from "../../utils/grid-columns";
import { CardsWrapperType } from "../../utils/interfaces";
import { UserList } from "./UserList";

export const CardsWrapperDesktop = ({ users=[] }: CardsWrapperType) => {
  return (
    <div>
      <UserList
        users={users}
        className="cards-wrapper-desktop"
        gridColumns={gridColumns || ""}
        photoWidth={56}
      />
    </div>
  );
};
