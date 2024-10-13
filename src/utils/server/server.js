const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");

const app = express();
const port = 5000;
const pool = new Pool({
	user: "admin",
	host: "localhost",
	database: "website_10",
	password: "qwerty",
	port: 5432,
});


app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);
app.use(bodyParser.json());

app.post("/register", async (req, res) => {
	const { username, password } = req.body;

	try {
		const userExists = await pool.query("SELECT * FROM users WHERE username = $1", [username]);

		if (userExists.rows.length > 0) {
			return res.status(400).json({ message: "Пользователь с таким именем уже существует" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const result = await pool.query(
			"INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
			[username, hashedPassword]
		);

		res.status(201).json({ username: result.rows[0].username });
	} catch (err) {
		console.error("Ошибка регистрации", err);
		res.status(500).json({ message: "Ошибка на сервере" });
	}
});

app.post("/login", async (req, res) => {
	const { username, password } = req.body;

	try {
		const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);

		if (result.rows.length > 0) {
			const user = result.rows[0];
			const isPasswordValid = await bcrypt.compare(password, user.password);

			if (isPasswordValid) {
				const token = jwt.sign({ username: user.username }, "your_jwt_secret", { expiresIn: "1h" });
				return res.json({ username: user.username, token });
			}
		}

		res.status(401).json({ message: "Неверный логин или пароль" });
	} catch (error) {
		console.error("Ошибка авторизации:", error);
		res.status(500).json({ message: "Внутренняя ошибка сервера" });
	}
});

const authenticateJWT = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (authHeader) {
		const token = authHeader.split(" ")[1];

		jwt.verify(token, "your_jwt_secret", (err, user) => {
			if (err) {
				return res.sendStatus(403);
			}
			req.user = user;
			next();
		});
	} else {
		res.sendStatus(401);
	}
};

app.get("/user", authenticateJWT, (req, res) => {
	res.json({ username: req.user.username });
});

app.post("/logout", (req, res) => {
	res.status(200).json({ message: "Выход выполнен" });
});

app.listen(port, () => {
	console.log(`Сервер запущен на http://localhost:${port}`);
});
