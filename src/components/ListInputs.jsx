import React, { useState } from "react";
import PropTypes from "prop-types";

export const ListInputs = ({ addItem }) => {
  let [itemId, setItemId] = useState(101);

  const createItem = () => {
    const item = {
      id: itemId,
      name: "Roasted Turkey",
      category: "Deli",
      deliveryMethod: "Ground"
    };

    let id = itemId;
    id++;

    setItemId(id);

    addItem(item);
  };

  return (
    <button
      className="addItemButton"
      onClick={createItem}
      data-testid="addItemButton"
    >
      Add Random Item
    </button>
  );
};

ListInputs.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default ListInputs;
