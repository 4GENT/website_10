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

interface RegistrationModalProps {
	open: boolean;
	onClose: () => void;
	onSwitchToLogin: () => void; // Функция для перехода на авторизацию
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({
	open,
	onClose,
	onSwitchToLogin,
}) => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLogin(event.target.value);
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleSubmit = () => {
		// Логика регистрации
		console.log("Логин:", login);
		console.log("Пароль:", password);
		onClose(); // Закрыть модальное окно после регистрации
	};

	return (
		<Dialog open={open} onClose={onClose} aria-labelledby="registration-dialog-title">
			<DialogTitle id="registration-dialog-title">
				Регистрация
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
					label="Придумайте логин"
					type="text"
					fullWidth
					variant="outlined"
					value={login}
					onChange={handleLoginChange}
				/>
				<TextField
					margin="dense"
					label="Придумайте пароль"
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
					Зарегистрироваться
				</Button>
				<Button onClick={onSwitchToLogin} color="primary">
					Уже есть аккаунт? Войти
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default RegistrationModal;
