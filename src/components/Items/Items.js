import React, { Component } from "react";
import Item from "./Item/Item";
import classes from "./Items.module.scss";

import { connect } from "react-redux";

class Items extends Component {
  render() {
    const list = this.props.list.map((item) => (
      <Item key={Math.floor(Math.random() * 100)}>{item}</Item>
    ));
    return <div className={classes.Items}>{list}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

export default connect(mapStateToProps)(Items);
