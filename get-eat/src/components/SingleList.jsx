import * as React from "react";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

const tableHeaders = ["Item Name", "Quantity", "Purchased"];
const dummyData = [
	{ item_name: "banana", quantity: "1", purchased: true },
	{ item_name: "apple", quantity: "1", purchased: false },
	{ item_name: "pear", quantity: "1", purchased: true },];

export default function SingleList() {

	const [items, setItems] = useState(dummyData);

	useEffect(() => {
		// useEffect to setItems on load
		console.log("TODO: fetch list data")
	}, [])

	function clickCheckbox() {
		alert("TODO: checkbox api call");
	}

	return (
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
						<tr key={obj.item_name}>
							<td>{obj.item_name}</td>
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
	);
}
