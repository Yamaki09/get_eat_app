import React from "react";
import ReactDOM from "react-dom/client";
import AllList from "./components/AllList";
import Home from "./components/Home";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Registration from "./components/Registration";
import SingleList from "./components/SingleList";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
// import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
				integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
				crossorigin="anonymous"
			/>
			<Container fluid>
				<Navigation />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/registration" element={<Registration />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/single-list" element={<SingleList />} />
					<Route exact path="/all-list" element={<AllList />} />
				</Routes>
			</Container>
		</BrowserRouter>
	</React.StrictMode>
);
