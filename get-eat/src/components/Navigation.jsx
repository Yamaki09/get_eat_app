import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export default function NavigationBar() {
	// this is a barebones implementation, once login capability is achieved this will need to be updated
	return (
		<Navbar bg="dark" variant="dark">
			<Container fluid>
				<Navbar.Brand href="./all-list">Get Eat</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="./all-list">Home</Nav.Link>
					<Nav.Link href="./login">login</Nav.Link>
					<Button variant="dark">Logout</Button>
				</Nav>
			</Container>
		</Navbar>
	);
}
