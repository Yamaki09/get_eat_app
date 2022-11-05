import * as React from "react";
import { useState, useEffect } from "react";
import "./AllList.css";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const tempList = [
	{ name: "grocery for party", date: "11/03/2022" },
	{ name: "grocery for this week's menu", date: "10/30/2022" },
	{ name: "grocery for emergency supply", date: "10/25/2022" },
];

export default function AllList({ setListid }) {
	const [lists, setLists] = useState([]);

	function newItem(e) {
		setLists(e.target.value);
	}

	const navigate = useNavigate();

	useEffect(() => {
		setLists(tempList);
	}, []);

	const listid = 2;

	return (
		<>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					let data = await axios.post("/api/lists/add", {
						lists,
					});
					setLists("");
				}}
			>
				<input
					type="text"
					className="add-list-box"
					placeholder="List Name"
					value={lists}
					onChange={newItem}
				></input>
				<Button variant="outline-dark" type="submit">
					Add List
				</Button>
			</form>
			<ListGroup className="list">
				{lists.map((obj) => {
					return (
						<>
							<ListGroup.Item
								className="item-list"
								onClick={() => {
									setListid(listid);
									console.log(listid)
									navigate(`/single-list/`);
								}}
							>{`${obj.name}`}</ListGroup.Item>
						</>
					);
				})}
			</ListGroup>
		</>
	);
}