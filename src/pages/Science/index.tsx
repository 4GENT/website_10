import React from "react";

const Science: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-start text-white p-4">
			<h1 className="text-4xl font-bold mb-6">Научные достижения Десятки</h1>
			<p className="mb-4 text-lg text-center">
				Кафедра ИУ-10 активно участвует в научной деятельности в области Защиты информации. Мы
				гордимся тем, что наши преподаватели и студенты добиваются значительных успехов в
				исследовательских проектах, а также в разработке новых технологий и методов защиты
				информации.
			</p>
			<p className="mb-4 text-lg text-center">Среди наших достижений:</p>
			<ul className="mb-4 text-lg list-disc list-inside">
				<li>Разработка систем защиты информации для критически важных инфраструктур.</li>
				<li>Исследования в области криптографии и ее применения в современных технологиях.</li>
				<li>
					Участие в международных конференциях и семинарах, посвященных информационной безопасности.
				</li>
				<li>Публикация научных статей в ведущих российских и международных журналах.</li>
			</ul>
			<p className="mb-4 text-lg text-center">
				Мы стремимся к тому, чтобы наши исследования были актуальными и полезными для современного
				общества. Мы активно сотрудничаем с различными организациями, что позволяет нам применять
				наши знания на практике и участвовать в решении реальных задач.
			</p>
			<p className="mb-4 text-lg text-center">
				Для более подробной информации о наших научных трудах вы можете ознакомиться с следующими
				ссылками:
			</p>
			<ul className="mb-4 text-lg list-disc list-inside">
				<li>
					<a
						href="https://www.elibrary.ru/"
						className="text-blue-400 hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						Электронная библиотека диссертаций
					</a>
				</li>
				<li>
					<a
						href="https://cyberleninka.ru/"
						className="text-blue-400 hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						CyberLeninka — Открытая электронная библиотека
					</a>
				</li>
				<li>
					<a
						href="https://www.science-education.ru/"
						className="text-blue-400 hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						Научно-образовательный портал
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Science;
