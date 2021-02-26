import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  addItem,
  removeItem,
  selectItem,
  deSelectItem
} from "../ducks/groceries";

import ListInputs from "./ListInputs";
import ListSelection from "./ListSelection";
import ListTable from "./ListTable";

const mapStateToProps = ({
  groceries: { list: groceryList, isItemSelected, selectedItem }
}) => ({
  groceryList,
  isItemSelected,
  selectedItem
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addItem,
      removeItem,
      selectItem,
      deSelectItem
    },
    dispatch
  );

class ListContainer extends Component {
  componentWillMount() {
    /* eslint-disable no-console */
    // console.log("groceryList", this.props.groceryList, this);
    // console.log("-----------");
    // console.log(this.props.isItemSelected);
    // console.log(this.props.selectedItem);
  }

  componentWillReceiveProps(nextProps) {
    // console.log("groceryList", nextProps.groceryList, this);
  }

  render() {
    return (
      <section className="groceryApp">
        <div className="listInputs">
          <ListInputs addItem={this.props.addItem} />
        </div>
        <div className="types">
          <ListSelection
            isItemSelected={this.props.isItemSelected}
            selectedItem={this.props.selectedItem}
          />
          <ListTable
            items={this.props.groceryList}
            removeItem={this.props.removeItem}
            selectItem={this.props.selectItem}
            deSelectItem={this.props.deSelectItem}
            selectedItem={this.props.selectedItem}
          />
        </div>
      </section>
    );
  }
}

ListContainer.propTypes = {
  // Props
  // Actions
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  deSelectItem: PropTypes.func.isRequired,
  // Store
  groceryList: PropTypes.array.isRequired
  // Other
};

const ListContainerRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);

export default ListContainerRedux;
