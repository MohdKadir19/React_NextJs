import React from "react";

const PostDetails = async (props) => {
  console.log(props);
  const param = await props.params;
  return (
    <div>
      Username : {param.username} and Post id : {param.id}
    </div>
  );
};

export default PostDetails;
