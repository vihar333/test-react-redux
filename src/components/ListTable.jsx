import React from "react";
import PropTypes from "prop-types";

const ListTable = ({
  items,
  selectedItem,
  removeItem,
  selectItem,
  deSelectItem
}) => {
  const defaultItem = {
    id: 0,
    name: "",
    category: "",
    deliveryMethod: ""
  };

  return (
    <div className="listTable">
      ListTable
      {items.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Delivery Method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.deliveryMethod}</td>
                  <td>
                    <button onClick={() => removeItem(item)}>
                      Remove Item
                    </button>
                    {selectedItem.id !== item.id ? (
                      <button onClick={() => selectItem(item)}>
                        Select Item
                      </button>
                    ) : (
                      <button onClick={() => deSelectItem(defaultItem)}>
                        De Select Item
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

ListTable.propTypes = {
  removeItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  deSelectItem: PropTypes.func.isRequired
};

export default ListTable;
