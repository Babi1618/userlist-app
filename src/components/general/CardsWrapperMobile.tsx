import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { fetchUsers } from "../../utils/api";
import { UserProps } from "../../utils/interfaces";
import { MobileLoadMore } from "../MobileLoadMore";
import { UserList } from "./UserList";

export const CardsWrapperMobile = ({
  setOnlineUsers,
  setUsersNumberMobile,
  users_mock, 
  users=[]
}: any) => {
  // const [users, setUsers] = useState<any>([]);
  const { page, setPage } = useAppContext() as any;

  // const getUsers = useCallback(async () => {
  //   const res = await fetchUsers(``);
  //   // console.log(users_mock)
  //   // const res= users_mock.users
  //   const onlineUs = res.filter((el: any) => el.status === "active");
  //   const onlineUsPrev = users.filter(
  //     (el: UserProps) => el.status === "active"
  //   );
  //   setUsers([...users, ...res]);
  //   setOnlineUsers([...onlineUsPrev, ...onlineUs]);
  //   setUsersNumberMobile([...users, ...res].length);
  // }, [page]);

  // useEffect(() => {
  //   getUsers();
  // }, [getUsers]);

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
