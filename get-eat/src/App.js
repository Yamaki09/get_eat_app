import React from "react";
import AllList from "./components/AllList";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import SingleList from "./components/SingleList";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Navigate,
} from "react-router-dom";

export default function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="/login" element={<Login />} />
				<Route path="/single-list" element={<SingleList />} />
				<Route path="/all-list" element={<AllList />} />
			</Routes>
		</Router>
	);
}
