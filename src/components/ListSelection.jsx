import React from "react";

const ListSelection = ({ isItemSelected, selectedItem }) => {
  return (
    <div className="listSelection">
      ListSelection
      {isItemSelected && (
        <table>
          <tbody>
            <tr>
              <th>Id: </th>
              <td> {selectedItem.id}</td>
            </tr>
            <tr>
              <th>Name: </th>
              <td> {selectedItem.name}</td>
            </tr>
            <tr>
              <th>Category: </th>
              <td> {selectedItem.category}</td>
            </tr>
            <tr>
              <th>Delivery Method: </th>
              <td> {selectedItem.deliveryMethod}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListSelection;
