import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Auth0Provider
      domain="dev-v1q3cr67.us.auth0.com"
      clientId="d3RAdBirXyXgsG45XR587Td2UvdgOsnB"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  // <Provider
  // // store={store}
  // //   // domain="dev-v1q3cr67.us.auth0.com"
  // //   // clientId="d3RAdBirXyXgsG45XR587Td2UvdgOsnB"
  // //   // redirectUri={window.location.origin}
  // // >
  // //   <App />
  // // </Provider>,
  document.getElementById("root")
);
