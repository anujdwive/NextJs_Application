import React from "react";

const DashboardHome = async ({ params }) => {
  const { home } = await params;
  console.log(home);
  return <div>Home</div>;
};

export default DashboardHome;
