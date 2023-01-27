import { Loading } from "@nextui-org/react";
import React from "react";
import classes from "./loader.module.css";

const Loader = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.text}>
        <Loading size="lg" type="points-opacity" />
      </div>
    </div>
  );
};

export default Loader;
