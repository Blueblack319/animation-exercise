import React from "react";
import classes from "./Item.module.scss";

import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/index";

const Item = (props) => (
  <div
    className={classes.Item}
    onClick={props.onRemoveItem.bind(this, props.id)}
  >
    <span>{props.children}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveItem: (id) => dispatch(actionCreators.removeItem(id)),
  };
};

export default connect(null, mapDispatchToProps)(Item);
