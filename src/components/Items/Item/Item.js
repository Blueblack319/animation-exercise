import React from "react";
import classes from "./Item.module.scss";

const Item = (props) => (
  <div className={classes.Item}>
    <span>{props.children}</span>
  </div>
);

export default Item;
