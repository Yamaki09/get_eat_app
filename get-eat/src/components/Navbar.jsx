import React, { useState } from "react";
import axios from "axios";
import "../App.css";

export default function Navbar(props) {
	const { setCurrentView } = props;

	return (
		<div className="Navbar">
			<label
				className="Logo"
				onClick={() => {
					setCurrentView("allLists");
				}}
			>
				Get Eat
			</label>
		</div>
	);
}
