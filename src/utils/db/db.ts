import { Pool } from "pg";

const pool = new Pool({
	user: "admin",
	host: "localhost",
	database: "website_10",
	password: "qwerty",
	port: 5432,
});

export default pool;
