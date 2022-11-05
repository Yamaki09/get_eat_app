import * as React from "react";
import { useState, useEffect } from "react";
import "./AllList.css";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export default function AllList({ setListid }) {
	const [lists, setLists] = useState([]);
	const [listName, setListName] = useState("");

	function newItem(e) {
		setListName(e.target.value);
	}

	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			try {
				const rawData = await fetch(`${API_URL}/list/1`);
				const itemsArray = await rawData.json();
				setLists(itemsArray);
			} catch (e) {
				console.error(e);
			}
		})();
	}, []);

	return (
		<>
			<h1 className="title">Welcome to your list</h1>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					const body = { userid: 1, listName: listName };
					console.log("this is body", body);
					try {
						let data = await fetch(`${API_URL}/list/`, {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify(body),
						});
						setLists([...lists, listName]);
					} catch (e) {
						console.error(e);
					}
				}}
			>
				<input
					type="text"
					className="add-list-box"
					placeholder="List to add"
					value={listName}
					onChange={newItem}
				></input>
				<Button
					className="add-list-button"
					as="add"
					type="button"
					value="Input"
				>
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
									setListid(obj.listId);
									console.log(obj.listId);
									navigate(`/single-list/`);
								}}
							>{`${obj.listName}`}</ListGroup.Item>
						</>
					);
				})}
			</ListGroup>
		</>
	);
}
