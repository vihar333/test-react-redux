import React from "react";
import ReactDOM from "react-dom";
import ListTable from "../components/ListTable";

import { Provider } from "react-redux";
import configureStore from "../store/configure-store";
const store = configureStore();

it("renders list data", () => {
  const fakeItem = {
    id: 10,
    name: "Roasted Turkey",
    category: "Deli",
    deliveryMethod: "Ground"
  };
  const fakelist = [
    {
      id: 66,
      name: "Bananas",
      category: "Fruit",
      deliveryMethod: "Air"
    },
    {
      id: 16,
      name: "Whole Grain Bread",
      category: "Grains",
      deliveryMethod: "Air"
    },
    {
      id: 100,
      name: "Lettuce",
      category: "Vegitable",
      deliveryMethod: "Ground"
    },
    {
      id: 10,
      name: "Roasted Turkey",
      category: "Deli",
      deliveryMethod: "Ground"
    }
  ];

  const div = document.createElement("div");

  ReactDOM.render(
    <Provider store={store}>
      <ListTable items={fakelist} selectedItem={fakeItem} />
    </Provider>,
    div
  );

  expect(div.textContent).toContain(fakeItem.id);
  expect(div.textContent).toContain(fakeItem.name);
  expect(div.textContent).toContain(fakeItem.category);
  expect(div.textContent).toContain(fakeItem.deliveryMethod);

  ReactDOM.unmountComponentAtNode(div);
});
