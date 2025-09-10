import { log } from "console";
import React from "react";

const page = async ({ searchParams }) => {
  //   console.log(props.searchParams);
  const searchParam = await searchParams;
  const category = searchParam?.category || "all";
  const sort = searchParam?.sort || "default";
  const page = searchParam?.page || 1;

  return (
    <div>
      Category is {category}, sort is {sort} and page is {page}
    </div>
  );
};

export default page;
