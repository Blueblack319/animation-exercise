import React, { Component } from "react";
import Items from "../../components/Items/Items";
import classes from "./Home.module.scss";

import * as actionCreators from "../../store/actions/index";
import { connect } from "react-redux";

class Home extends Component {
  handleAddItem = () => {
    const newItem = this.props.list.length + 1;
    this.props.onAddItem(newItem);
  };
  render() {
    return (
      <div className={classes.Home}>
        <h1>React Animations</h1>
        <button>Open Modal</button>
        <p>
          <strong>Animating Lists</strong>
        </p>
        <button onClick={this.handleAddItem}>Add Item</button>
        <Items />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddItem: (item) => dispatch(actionCreators.addItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
