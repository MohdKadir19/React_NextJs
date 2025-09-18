import React from "react";

const page = (props) => {
  const { slug } = props.params;
  console.log(slug);
  return <div>Blog</div>;
};

export default page;
