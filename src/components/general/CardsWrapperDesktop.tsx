import { useCallback, useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { fetchUsers } from "../../utils/api";
import { gridColumns } from "../../utils/grid-columns";
import { UserProps } from "../../utils/interfaces";
import { UserList } from "./UserList";

export const CardsWrapperDesktop = ({ setOnlineUsers }: any) => {
  const [users, setUsers] = useState<any>([]);
  const { page } = useAppContext() as any;

  const getAllUsers = useCallback(async () => {
    const res = await fetchUsers(`?page=${page}&per_page=15`);
    const onlineUs = res.filter((el: UserProps) => el.status === "active");
    setUsers(res);
    setOnlineUsers(onlineUs);
  }, [page]);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

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
