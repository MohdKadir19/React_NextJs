import React from "react";

const Server = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);

  return (
    <>
      <h2>This is a Server component Page</h2>
      <div class="grid grid-cols-4 gap-4">
        {data.map((post) => (
          <div
            key={post.id}
            className="bg-amber-800 p-3 shadow-lg rounded-sm transition-all duration-300 hover:translate-y-2 cursor-pointer"
          >
            <h3 className=" text-xl text-ellipsis">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Server;
