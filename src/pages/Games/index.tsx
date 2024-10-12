import React from "react";

const Games: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-start text-white p-4">
			<h1 className="text-4xl font-bold mb-6">Вечера настольных игр Десятки</h1>
			<p className="mb-4 text-lg">
				В сообществе Десятка мы организуем вечера, посвященные настольным играм, которые стали
				неотъемлемой частью наших встреч. Эти мероприятия помогают участникам расслабиться,
				пообщаться и, конечно, проявить свои игровые навыки. Каждую неделю мы выбираем различные
				игры, чтобы каждый мог найти что-то по душе.
			</p>
			<p className="mb-4 text-lg">
				Настольные игры — это не только развлечения, но и отличный способ развивать логику и
				стратегическое мышление. Среди популярных игр, которые мы часто играем, можно отметить:
			</p>
			<ul className="mb-4 text-lg list-disc list-inside">
				<li>
					<a
						href="https://www.chess.com/learn-how-to-play-chess"
						className="text-blue-400 underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						Шахматы
					</a>
					— классическая стратегическая игра, требующая концентрации и продуманности на каждом ходе.
				</li>
				<li>
					<a
						href="https://monopoly.ru/"
						className="text-blue-400 underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						Монополия
					</a>
					— игра, в которой вам нужно строить свою империю и обойти противников.
				</li>
				<li>
					<a
						href="https://mafiagame.com/rules"
						className="text-blue-400 underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						Мафия
					</a>
					— социальная игра, где важны стратегии общения и скрытности.
				</li>
				<li>
					<a
						href="https://codenamesgame.com/faq/"
						className="text-blue-400 underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						Кодовые имена
					</a>
					— командная игра на ассоциации и догадки.
				</li>
			</ul>
			<p className="mb-4 text-lg">
				Мы также предоставляем гайды и правила для каждой игры, чтобы новые участники могли легко
				присоединиться к играм. Вот несколько полезных ресурсов, где вы можете ознакомиться с
				правилами и стратегиями:
			</p>
			<ul className="mb-4 text-lg list-disc list-inside">
				<li>
					<a
						href="https://www.chess.com/learn-how-to-play-chess"
						className="text-blue-400 underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						Шахматы
					</a>
					— гайд по основам шахмат.
				</li>
				<li>
					<a
						href="https://www.monopoly.ru/faq"
						className="text-blue-400 underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						Монополия
					</a>
					— правила и советы.
				</li>
				<li>
					<a
						href="https://mafiagame.com/rules"
						className="text-blue-400 underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						Мафия
					</a>
					— все о правилах и стратегиях.
				</li>
				<li>
					<a
						href="https://codenamesgame.com/faq/"
						className="text-blue-400 underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						Кодовые имена
					</a>
					— гайд по игре и тактикам.
				</li>
			</ul>
			<p className="mb-4 text-lg">
				Присоединяйтесь к нашим вечерам настольных игр, чтобы провести время с интересными людьми,
				испытать свои навыки и, возможно, научиться чему-то новому!
			</p>
		</div>
	);
};

export default Games;
