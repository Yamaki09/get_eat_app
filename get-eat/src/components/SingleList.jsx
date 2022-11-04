import * as React from "react";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

const API_URL = process.env.REACT_APP_API_URL;

// temp variable for testing
const listid = 1;

const tableHeaders = ["Item Name", "Quantity", "Purchased"];
const dummyData = [
	{ itemName: "banana", quantity: "1", purchased: true },
	{ itemName: "apple", quantity: "1", purchased: false },
	{ itemName: "pear", quantity: "1", purchased: true },];

export default function SingleList() {

	const [items, setItems] = useState(dummyData);

	useEffect(() => {
		(async () => {
			try {
				const rawData = await fetch(`${API_URL}/list/${listid}/items`)
				const itemsArray = await rawData.json();
				setItems(itemsArray);
			} catch (e) {
				console.error(e);
			}
		}
		)()
	}, [])

	function clickCheckbox() {
		alert("TODO: checkbox api call");
	}

	return (
		<>
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						{tableHeaders.map((header) => {
							return <th key={header}>{header}</th>
						})}
					</tr>
				</thead>
				<tbody>
					{items.map(obj => {
						return (
							<tr key={obj.itemName}>
								<td>{obj.itemName}</td>
								<td>{obj.quantity}</td>
								<td>
									<Form.Check
										type="checkbox"
										onChange={clickCheckbox}
										checked={obj.purchased}
									/>
								</td>
							</tr>
						)
					})}
				</tbody>
			</Table>
			<Button variant="dark">
				New Item
			</Button>
		</>
	);
}
