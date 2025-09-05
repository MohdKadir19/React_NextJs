"use client";
import React, { useEffect, useState } from "react";
import Counter from "./Counter";

const Client = () => {
  const [postData, setPostData] = useState([]);

  const controller = new AbortController();
  const signal = controller.signal;
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const getData = async () => {
    try {
      const response = await fetch(URL, { signal });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setPostData(data);
      console.log("Data fetched successfully");
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Error fetching data:", error);
      }
    }
  };

  useEffect(() => {
    getData();
    return () => {
      // Cleanup: abort the fetch on unmount
      controller.abort();
      console.log("Component unmounted");
    };
  }, []);

  return (
    <>
      <h2>This is a client component Page</h2>
      <p>This component is used for client-specific content.</p>
      <div class="grid grid-cols-4 gap-4">
        {postData.map((post) => (
          <div key={post.id} className="bg-amber-800 p-3">
            <h3 className="text">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <button className="bg-green-600 p-3" onClick={() => setPostData([])}>
        Clear Data
      </button>
      <Counter />
    </>
  );
};

export default Client;
