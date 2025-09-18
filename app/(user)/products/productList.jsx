"use-client";
import { useSearchParams } from "next/navigation";
const productList = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";
  const page = searchParams.get("page") || "1";
  console.log("Client:", category, page);

  return <div>productList</div>;
};

export default productList;
