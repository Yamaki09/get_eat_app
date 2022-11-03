import React, { useState } from "react";
import "../App.css";
import { Button, Form } from "react-bootstrap";


export default function Login() {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleEmail(e) {
		setEmail(e.value);
	}

	function handlePassword(e) {
		setPassword(e.value);
	}

	function handleSubmit() {
		alert("logged in");
	}

	return (
		<Form>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmail} />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" value={password} onChange={handlePassword} />
			</Form.Group>

			<Button variant="primary" type="button" onClick={handleSubmit}>
				Submit
			</Button>
		</Form>
	);
};

