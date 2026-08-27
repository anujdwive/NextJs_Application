import React from "react";

const Home = async ({ params }) => {
  const { home } = await params;
  console.log(home);
  return <div>Home</div>;
};

export default Home;
