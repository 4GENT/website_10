import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import RegistrationModal from "../RegistrationModal";
import LoginModal from "../LoginModal";

const Navbar: React.FC = () => {
	const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
	const [isLoginOpen, setIsLoginOpen] = useState(false);

	const handleRegistrationOpen = () => setIsRegistrationOpen(true);
	const handleRegistrationClose = () => setIsRegistrationOpen(false);

	const handleLoginOpen = () => setIsLoginOpen(true);
	const handleLoginClose = () => setIsLoginOpen(false);

	const handleSwitchToLogin = () => {
		setIsRegistrationOpen(false);
		handleLoginOpen();
	};

	const handleSwitchToRegistration = () => {
		setIsLoginOpen(false);
		handleRegistrationOpen();
	};

	return (
		<>
			<AppBar
				position="static"
				style={{ background: "linear-gradient(to right, #001F3F, #8E24AA)" }}
				className="shadow-md w-full rounded-lg"
			>
				<Toolbar className="flex justify-between w-full">
					<div className="flex space-x-4 flex-grow">
						<Link
							to="/"
							className="hover:bg-blue-800 text-white px-4 py-2 rounded flex items-center justify-center"
						>
							На главную страницу
						</Link>
						<Link
							to="/about"
							className="hover:bg-blue-800 text-white px-4 py-2 rounded flex items-center justify-center"
						>
							О нас
						</Link>
						<Link
							to="/projects"
							className="hover:bg-blue-800 text-white px-4 py-2 rounded flex items-center justify-center"
						>
							Наши проекты
						</Link>
						<Link
							to="/events"
							className="hover:bg-blue-800 text-white px-4 py-2 rounded flex items-center justify-center"
						>
							Вечера десятки
						</Link>
						<Link
							to="/games"
							className="hover:bg-blue-800 text-white px-4 py-2 rounded flex items-center justify-center"
						>
							Поиграем?
						</Link>
						<Link
							to="/sports"
							className="hover:bg-blue-800 text-white px-4 py-2 rounded flex items-center justify-center"
						>
							Спорт
						</Link>
						<Link
							to="/science"
							className="hover:bg-blue-800 text-white px-4 py-2 rounded flex items-center justify-center"
						>
							Наука
						</Link>
					</div>

					<div className="flex space-x-4">
						<Button
							variant="contained"
							color="primary"
							className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 mr-2"
							onClick={handleRegistrationOpen}
						>
							Регистрация
						</Button>
						<Button
							variant="contained"
							color="primary"
							className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2"
							onClick={handleLoginOpen}
						>
							Авторизация
						</Button>
					</div>
				</Toolbar>
			</AppBar>
			<RegistrationModal
				open={isRegistrationOpen}
				onClose={handleRegistrationClose}
				onSwitchToLogin={handleSwitchToLogin}
			/>
			<LoginModal
				open={isLoginOpen}
				onClose={handleLoginClose}
				onSwitchToRegistration={handleSwitchToRegistration}
			/>
		</>
	);
};

export default Navbar;
