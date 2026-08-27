import React from "react";

const usersDetails = async ({ params }) => {
  const userId = await params;
  const id = userId.usersDetails;
  console.log(id);

  return <div>UsersDetails-{id}</div>;
};

export default usersDetails;
