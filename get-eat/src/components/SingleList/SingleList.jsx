import * as React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NewItemModal from "./NewItemModal";

const API_URL = process.env.REACT_APP_API_URL || "https://get-eat-api.onrender.com/";

// Headers to be array.mapped to the items table.
const tableHeaders = ["Item Name", "Quantity", "Purchased", "Edit"];

// temporary data for pre-api work.
const dummyData = [
	{ itemName: "banana", quantity: "1", purchased: true },
	{ itemName: "apple", quantity: "1", purchased: false },
	{ itemName: "pear", quantity: "1", purchased: true },
];

export default function SingleList({ listid }) {
	const [items, setItems] = useState(dummyData);

	// useEffect to request data for the current listid
	useEffect(() => {
		(async () => {
			try {
				const rawData = await fetch(`${API_URL}/list/${listid || 1}/items`);
				const itemsArray = await rawData.json();
				console.log(itemsArray);
				setItems(itemsArray);
			} catch (e) {
				console.error(e);
			}
		})();
	}, [listid]);

	return (
		<>
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						{tableHeaders.map((header, index) => {
							return <th key={header + index}>{header}</th>;
						})}
					</tr>
				</thead>
				<tbody>
					{items.map((obj, index) => {
						return (
							<tr key={obj.itemName + index}>
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
						);
					})}
				</tbody>
			</Table>
			<NewItemModal listid={listid} items={items} setItems={setItems} />
		</>
	);
}
