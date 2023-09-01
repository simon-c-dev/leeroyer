import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { AuthProvider } from "./context/AuthProvider";
import { HashRouter, Routes, Route } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

ReactDOM.render(
  <HashRouter>
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </AuthProvider>
  </HashRouter>,
  document.getElementById("root")
);
