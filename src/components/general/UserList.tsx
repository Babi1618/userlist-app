import { useMemo } from "react";
import { UserProps } from "../../utils/interfaces";
import { Card } from "./Card";

export function UserList({ users, className, photoWidth, gridColumns }: any) {
  const userElements = useMemo(() => {
    return users.map((el: UserProps, i: number) => (
      <Card
        user={el}
        key={`${el.id}${i}`}
        photoWidth={photoWidth}
        gridColumns={gridColumns ? gridColumns[i] : ""}
      />
    ));
  }, [users]);
  return <div className={className}>{userElements}</div>;
}
