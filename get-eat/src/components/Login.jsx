import React from "react";
import "../App.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "https://get-eat-api.onrender.com";

export default function Login() {

	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		const userEmail = e.target[0].value;
		const userPassword = e.target[1].value;

		(async () => {
			try {
				const body = JSON.stringify({ userEmail, userPassword })
				const rawData = await fetch(`${API_URL}/user/signin`, {
					method: "POST",
					headers: {
						'Content-Type': 'application/json',
					},
					body: body,
				})
				const data = await rawData.json();
				localStorage.setItem("userid", data.userId)
				navigate(`/all-list/`);
			} catch (e) {
				console.error(e);
			}
		})()
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>

			<Button variant="primary" type="submit" >
				Submit
			</Button>
		</Form>
	);
};

