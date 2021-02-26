import React from "react";
import ReactDOM from "react-dom";
import ListInputs from "../components/ListInputs";

import { Provider } from "react-redux";
import configureStore from "../store/configure-store";
const store = configureStore();

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <ListInputs />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
