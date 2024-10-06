import React, { useState } from "react";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	TextField,
	Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface LoginModalProps {
	open: boolean;
	onClose: () => void;
	onSwitchToRegistration: () => void; // Функция для перехода на регистрацию
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose, onSwitchToRegistration }) => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLogin(event.target.value);
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleSubmit = () => {
		// Логика авторизации
		console.log("Логин:", login);
		console.log("Пароль:", password);
		onClose(); // Закрыть модальное окно после авторизации
	};

	return (
		<Dialog open={open} onClose={onClose} aria-labelledby="login-dialog-title">
			<DialogTitle id="login-dialog-title">
				Авторизация
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
					}}
				>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent dividers>
				<TextField
					autoFocus
					margin="dense"
					label="Логин"
					type="text"
					fullWidth
					variant="outlined"
					value={login}
					onChange={handleLoginChange}
				/>
				<TextField
					margin="dense"
					label="Пароль"
					type="password"
					fullWidth
					variant="outlined"
					value={password}
					onChange={handlePasswordChange}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} color="primary">
					Отмена
				</Button>
				<Button onClick={handleSubmit} color="primary">
					Войти
				</Button>
				<Button onClick={onSwitchToRegistration} color="primary">
					Нет аккаунта? Зарегистрироваться
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default LoginModal;
