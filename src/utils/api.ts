export const fetchUsers = async (url: string) => {
  const response = await fetch(
    `http://localhost:3002/users${url}`
  ).then((response) => response.json());
  // console.log(response[1])
  return response;
};

export async function fetchTotalNumberOfElements() {
  const access_token =
    "bd343b65c8503a4d00fd6d233ab5c82acb980c5ec83ccd3b3e3dd5456bc8307b";
  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${access_token}`,
  });

  try {
    const response = await fetch("https://gorest.co.in/public/v2/usersfdafadòofhaòhfa", {
      method: "GET",
      headers: headers,
    });
    const total = response.headers.get("x-pagination-total");
    if (total) {
      return Number(total);
    } else {
      console.log(
        `The x-pagination-total header is not present in the response.`
      );
      return 0;
    }
  } catch (error) {
    console.log(`There was an error making the request: ${error}`);
  }
}
