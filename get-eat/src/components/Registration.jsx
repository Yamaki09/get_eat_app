import React, { useState, setState } from "react";
import "./Registration.css";

const API_URL = process.env.REACT_APP_API_URL || "https://get-eat-api.onrender.com/"

export default function Registration() {
	const [userName, setUserName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		if (id === "userName") {
			setUserName(value);
		}
		if (id === "email") {
			setEmail(value);
		}
		if (id === "password") {
			setPassword(value);
		}
		if (id === "confirmPassword") {
			setConfirmPassword(value);
		}
	};

	const handleSubmit = async () => {
		const body = {
			userName: userName,
			userEmail: email,
			userPassword: password,
		};
		try {
			let data = await fetch(`${API_URL}/user/signup`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			});
		} catch (e) {
			console.error(e);
		}
	};
	return (
		<div className="form">
			<div className="form-body">
				<div className="username">
					<label className="form__label" for="userName">
						User name{" "}
					</label>
					<input
						className="form__input"
						type="text"
						value={userName}
						onChange={(e) => handleInputChange(e)}
						id="userName"
						placeholder="User name"
					/>
				</div>
				<div className="email">
					<label className="form__label" for="email">
						Email{" "}
					</label>
					<input
						type="email"
						id="email"
						className="form__input"
						value={email}
						onChange={(e) => handleInputChange(e)}
						placeholder="Email"
					/>
				</div>
				<div className="password">
					<label className="form__label" for="password">
						Password{" "}
					</label>
					<input
						className="form__input"
						type="password"
						id="password"
						value={password}
						onChange={(e) => handleInputChange(e)}
						placeholder="Password"
					/>
				</div>
				<div className="confirm-password">
					<label className="form__label" for="confirmPassword">
						Confirm Password{" "}
					</label>
					<input
						className="form__input"
						type="password"
						id="confirmPassword"
						value={confirmPassword}
						onChange={(e) => handleInputChange(e)}
						placeholder="Confirm Password"
					/>
				</div>
			</div>
			<div className="footer">
				<button onClick={() => handleSubmit()} type="submit" class="btn">
					Register
				</button>
			</div>
		</div>
	);
}
