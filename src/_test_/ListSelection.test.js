import React from "react";
import ReactDOM from "react-dom";
import ListSelection from "../components/ListSelection";

import { Provider } from "react-redux";
import configureStore from "../store/configure-store";
const store = configureStore();

it("renders item data", () => {
  const fakeItem = {
    id: 10,
    name: "Roasted Turkey",
    category: "Deli",
    deliveryMethod: "Ground"
  };
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <ListSelection isItemSelected={true} selectedItem={fakeItem} />
    </Provider>,
    div
  );

  expect(div.textContent).toContain(fakeItem.id);
  expect(div.textContent).toContain(fakeItem.name);
  expect(div.textContent).toContain(fakeItem.category);
  expect(div.textContent).toContain(fakeItem.deliveryMethod);

  ReactDOM.unmountComponentAtNode(div);
});
