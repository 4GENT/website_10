import React from "react";

const Home: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-start text-white p-4">
			<h1 className="text-4xl font-bold mb-6 text-center">
				Кафедра ИУ-10 "Защита информации" — Десятка
			</h1>
			<p className="text-center text-lg mb-8">
				Мы открываем новый набор в наше сообщество! Присоединяйтесь к Десятке и будьте частью
				команды информационной безопасности. Здесь вы найдете новых друзей, интересные проекты и
				массу полезных знаний!
			</p>
			<h2 className="text-2xl font-bold mb-4 text-center">Открытие набора в "Десятку"!</h2>
			<a href="https://vk.com/vechera10ki" target="_blank" rel="noopener noreferrer">
				<img
					src={`${process.env.PUBLIC_URL}/nabor.jpg`}
					alt="Открытие набора"
					className="w-full max-w-md cursor-pointer"
				/>
			</a>
		</div>
	);
};

export default Home;
