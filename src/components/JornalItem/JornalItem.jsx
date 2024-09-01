import './JornalItem.css';

// передаем пропсы, которые потом испльзуем для отображения в элементах
function JornalItem({ title, date, text }) {
	const formatDate = new Intl.DateTimeFormat('ru-RU').format(date);

	return (
		<>
			<h2 className="jornal-item__header">{title}</h2>
			<h2 className="jornal-item__body">
				<div className="jornal-item__date">{formatDate}</div>
				<div className="jornal-item__text">{text}</div>
			</h2>
		</>
	);
}

export default JornalItem;
