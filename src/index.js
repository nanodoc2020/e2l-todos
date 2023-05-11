import React from "react";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import ConnectedApp from "./App";
import ReactDom from "react-dom";

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
};




ReactDom.render(<ReduxApp />, document.getElementById("root"));

