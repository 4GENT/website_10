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
import { loginUser } from "../../utils/axios/AuthService";
import { AxiosError } from "axios";

interface LoginModalProps {
	open: boolean;
	onClose: () => void;
	onSwitchToRegistration: () => void;
	onUserLogin: (username: string, token: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
	open,
	onClose,
	onSwitchToRegistration,
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
			const response = await loginUser({ username: login, password });
			console.log("Пользователь авторизован:", response.username);
			localStorage.setItem("token", response.token);
			onUserLogin(response.username, response.token);
			setErrorMessage("");
			onClose();
		} catch (error) {
			console.error("Ошибка авторизации:", error);
			if (error instanceof AxiosError) {
				if (error.response && error.response.status === 401) {
					setErrorMessage("Неверный логин или пароль.");
				} else {
					setErrorMessage("Произошла ошибка при авторизации. Попробуйте снова.");
				}
			} else {
				setErrorMessage("Произошла неизвестная ошибка. Попробуйте снова.");
			}
		}
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
				{errorMessage && (
					<Typography color="error" variant="body2" style={{ marginTop: 10 }}>
						{errorMessage}
					</Typography>
				)}
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} color="primary">
					Отмена
				</Button>
				<Button onClick={handleSubmit} color="primary">
					Войти
				</Button>
				<Button onClick={onSwitchToRegistration} color="primary">
					Еще нет аккаунта? Зарегистрироваться
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default LoginModal;
