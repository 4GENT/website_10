import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import RegistrationModal from "../RegistrationModal";
import LoginModal from "../LoginModal";
import { fetchUser, logoutUser } from "../../utils/axios/AuthService";

const Navbar: React.FC = () => {
	const [isRegistrationOpen, setIsRegistrationOpen] = useState<boolean>(false);
	const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
	const [username, setUsername] = useState<string | null>(null);

	const handleUserLogin = (newUsername: string) => {
		setUsername(newUsername);
	};

	useEffect(() => {
		const loadUser = async () => {
			try {
				const user = await fetchUser();
				if (user?.username) {
					setUsername(user.username);
				}
			} catch (error) {
				console.error("Ошибка загрузки пользователя:", error);
			}
		};

		loadUser();
	}, []);

	const handleLogout = async () => {
		await logoutUser();
		setUsername(null);
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
						{username ? (
							<>
								<span className="text-white px-4 py-2">{username}</span>
								<Button
									variant="contained"
									color="secondary"
									className="text-white"
									onClick={handleLogout}
								>
									Выйти
								</Button>
							</>
						) : (
							<>
								<Button
									variant="contained"
									color="primary"
									className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 mr-2"
									onClick={() => setIsRegistrationOpen(true)}
								>
									Регистрация
								</Button>
								<Button
									variant="contained"
									color="primary"
									className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2"
									onClick={() => setIsLoginOpen(true)}
								>
									Авторизация
								</Button>
							</>
						)}
					</div>
				</Toolbar>
			</AppBar>

			<RegistrationModal
				open={isRegistrationOpen}
				onClose={() => setIsRegistrationOpen(false)}
				onSwitchToLogin={() => {
					setIsRegistrationOpen(false);
					setIsLoginOpen(true);
				}}
				onUserLogin={handleUserLogin}
			/>

			<LoginModal
				open={isLoginOpen}
				onClose={() => setIsLoginOpen(false)}
				onSwitchToRegistration={() => {
					setIsLoginOpen(false);
					setIsRegistrationOpen(true);
				}}
				onUserLogin={handleUserLogin}
			/>
		</>
	);
};

export default Navbar;
