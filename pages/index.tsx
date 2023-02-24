import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <>
      <h1>The Home Page</h1>
      <h1>New Things 23222</h1>
      <ul>
        <li>
          <Link href="news/nxtjs">NextJS Is a great framework</Link>
        </li>
        <li>
          <Link href="news/somethig">Something else</Link>
        </li>
      </ul>
    </>
  );
};

export default Index;
