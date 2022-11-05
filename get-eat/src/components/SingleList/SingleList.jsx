import * as React from "react";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import NewItemModal from "./NewItemModal";

const API_URL = process.env.REACT_APP_API_URL;

// Headers to be array.mapped to the items table.
const tableHeaders = ["Item Name", "Quantity", "Purchased", "Edit"];

// temporary data for pre-api work.
const dummyData = [
	{ itemName: "banana", quantity: "1", purchased: true },
	{ itemName: "apple", quantity: "1", purchased: false },
	{ itemName: "pear", quantity: "1", purchased: true },];

export default function SingleList({ listid }) {

	// hardcoding until all lists view can pass prop to here
	listid = 1;

	const [items, setItems] = useState(dummyData);

	// useEffect to request data for the current listid
	useEffect(() => {
		(async () => {
			try {
				const rawData = await fetch(`${API_URL}/list/${listid || 1}/items`)
				const itemsArray = await rawData.json();
				setItems(itemsArray);
			} catch (e) {
				console.error(e);
			}
		}
		)()
	}, [])

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
										disabled
										type="checkbox"
										checked={obj.purchased}
									/>
								</td>
								<td>
									<Button variant="dark"> edit </Button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</Table>
			<NewItemModal listid />
		</>
	);
}
