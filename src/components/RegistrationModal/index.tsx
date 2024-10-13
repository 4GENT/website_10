import React, { useState, ChangeEvent } from "react";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	TextField,
	Button,
	Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { registerUser, loginUser } from "../../utils/axios/AuthService";

interface RegistrationModalProps {
	open: boolean;
	onClose: () => void;
	onSwitchToLogin: () => void;
	onUserLogin: (username: string, token: string) => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({
	open,
	onClose,
	onSwitchToLogin,
	onUserLogin,
}) => {
	const [login, setLogin] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [errorMessage, setErrorMessage] = useState<string>("");

	const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
		setLogin(event.target.value);
	};

	const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

const handleSubmit = async () => {
	try {
		const response = await registerUser({ username: login, password });

		const loginResponse = await loginUser({ username: login, password });
		localStorage.setItem("token", loginResponse.token);
		onUserLogin(loginResponse.username, loginResponse.token);
		setErrorMessage("");
		onClose();
	} catch (error: any) {
		console.error("Ошибка регистрации:", error);

		if (error.response && error.response.status === 400) {
			setErrorMessage("Пользователь с таким логином уже существует.");
		} else {
			setErrorMessage("Произошла ошибка при регистрации. Попробуйте снова.");
		}
	}
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
				{errorMessage && (
					<Typography color="error" variant="body2">
						{errorMessage}
					</Typography>
				)}
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
