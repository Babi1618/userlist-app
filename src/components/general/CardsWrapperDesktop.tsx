import { useCallback, useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { gridColumns } from "../../utils/grid-columns";
import { UserList } from "./UserList";
// import users_mock from "../../mock/mock_users.json";

export const CardsWrapperDesktop = ({ setOnlineUsers, users_mock }: any) => {
  const [users, setUsers] = useState<any>([]);
  const { page } = useAppContext() as any;

  const getAllUsers = useCallback(async () => {
    // const res = await fetchUsers(`?page=${page}&per_page=15`);
    const res = users_mock.users;
    const onlineUs = res.filter((el: any) => el.status === "active");
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
