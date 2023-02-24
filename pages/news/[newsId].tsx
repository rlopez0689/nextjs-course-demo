import { useRouter } from "next/router";
import React from "react";

const DetailsPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  return <h1>Details {newsId}</h1>;
};

export default DetailsPage;
