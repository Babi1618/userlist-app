import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { fetchUsers } from "../../utils/api";
import { UserProps } from "../../utils/interfaces";
import { MobileLoadMore } from "../MobileLoadMore";
import { UserList } from "./UserList";

export const CardsWrapperMobile = ({
  setOnlineUsers,
  setUsersNumberMobile,
}: any) => {
  const [users, setUsers] = useState<any>([]);
  const { page, setPage } = useAppContext() as any;

  const getUsers = useCallback(async () => {
    const res = await fetchUsers(`?page=${page}&per_page=6`);
    const onlineUs = res.filter((el: UserProps) => el.status === "active");
    const onlineUsPrev = users.filter(
      (el: UserProps) => el.status === "active"
    );
    setUsers([...users, ...res]);
    setOnlineUsers([...onlineUsPrev, ...onlineUs]);
    setUsersNumberMobile([...users, ...res].length);
  }, [page]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

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
