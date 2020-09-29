import React from "react";
import classes from "./Item.module.scss";

import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/index";

const Item = (props) => (
  <div className={classes.Item} onClick={props.onRemoveItem(props.key)}>
    <span>{props.children}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveItem: (key) => dispatch(actionCreators.removeItem(key)),
  };
};

export default connect(null, mapDispatchToProps)(Item);
