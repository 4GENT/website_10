import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

interface AuthResponse {
	username: string;
}

interface LoginResponse extends AuthResponse {
	token: string;
}

interface RegisterData {
	username: string;
	password: string;
}

interface LoginData {
	username: string;
	password: string;
}

export const registerUser = async (data: RegisterData): Promise<AuthResponse> => {
	const response = await axios.post<AuthResponse>(`${API_BASE_URL}/register`, data, {
		withCredentials: true,
	});
	return response.data;
};

export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
	const response = await axios.post<LoginResponse>(`${API_BASE_URL}/login`, data, {
		withCredentials: true,
	});
	return response.data;
};

export const fetchUser = async (): Promise<AuthResponse> => {
	const token = localStorage.getItem("token");
	if (!token) throw new Error("Нет токена");

	const response = await axios.get<AuthResponse>(`${API_BASE_URL}/user`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
};

export const logoutUser = async (): Promise<void> => {
	localStorage.removeItem("token");
	await axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true });
};
