import { faker } from "@faker-js/faker";
import { useState, useEffect, useCallback } from "react";

const useMakeMockUsers = () => {
  type genderType = "female" | "male";
  const [data, setData] = useState("prova");
  const [users, setUsers] = useState<any>([]);
  const createFakeUsers = useCallback(() => {
    const employees = [];
    for (let index = 0; index < 99; index++) {
      let gender: genderType = "female";
      let online = true;
      console.log(index % 3);
      if (index % 2 === 0) {
        gender = "male";
      }
      if (index % 3 === 0) {
        console.log("not online");
        online = false;
      }
      const singleUser = {
        id: index,
        name: faker.name.firstName(gender),
        last_name: faker.name.lastName(),
        e_mail: faker.internet.email(),
        sex: gender,
        img: `https://randomuser.me/api/portraits/${
          gender === "female" ? `women` : `men`
        }/${index + 1}.jpg`,
        phone: faker.phone.number("+39 3## ## ## ###"),
        online: online,
      };
      console.log(singleUser)
      employees.push(singleUser);
    }
    return employees;
  }, []);

  useEffect(() => {
    setUsers(createFakeUsers());
  }, [createFakeUsers]);

  return { data, users };
};

export default useMakeMockUsers;
