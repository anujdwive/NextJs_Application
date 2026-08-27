import React from "react";

const allBlogs = async ({ params }) => {
  const { allblogs } = await params;
  console.log(allblogs); // here we catch all the route segments in a array
  return <div>allBlogs</div>;
};

export default allBlogs;
