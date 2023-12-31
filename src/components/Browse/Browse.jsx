import React, { useEffect } from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";

const Browse = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
