import { useAppContext } from "../../context/AppContext";
import { CardsWrapperType } from "../../utils/interfaces";
import { MobileLoadMore } from "../MobileLoadMore";
import { UserList } from "./UserList";

export const CardsWrapperMobile = ({
  users=[]
}: CardsWrapperType) => {
  const { page, setPage } = useAppContext() as any;

  const handleOtherUsers = () => {
    setPage((prev: number) => prev + 1);
  };

  return (
    <>
      <div>
        <UserList
          users={users}
          className="cards-wrapper-mobile"
          photoWidth={56}
        />
      </div>
      <MobileLoadMore handleOtherUsers={handleOtherUsers} />
    </>
  );
};
