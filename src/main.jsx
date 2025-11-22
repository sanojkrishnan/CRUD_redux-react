import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./app/Store.jsx";
import { Provider } from "react-redux";
 //store given globally now.
 
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>  //provider is used to provide the store to the entire application. This will help to access state from anywhere
      <App />
    </Provider>
  </StrictMode>
);
