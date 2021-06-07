import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import { scoresReducer } from "./reducers/scoresReducer";

let store = createStore(scoresReducer);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider
      theme={{ font: "Dosis", color: "#9b02a1", secondaryColor: "#d800e0" }}
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
