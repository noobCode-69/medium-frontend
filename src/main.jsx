import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import client from "./QueryClient";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./redux/reduces";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </QueryClientProvider>
);
