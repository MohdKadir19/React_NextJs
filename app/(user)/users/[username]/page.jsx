import React from "react";

const page = async (props) => {
  console.log(props);
  const param = await props.params;
  return <div>Username {param.username}</div>;
};

export default page;
