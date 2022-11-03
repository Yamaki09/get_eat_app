import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
