import './JornalList.css';
import CardButton from '../CardButton/CardButton';
import JornalItem from '../JornalItem/JornalItem';

function JornalList({ items }) {
	if (items.length === 0) {
		return <p>Записей пока нет</p>;
	}

	const sortItems = (a, b) => {
		if (a.date > b.date) {
			return 1;
		}else {
			return -1;
		}
	};

	return <>
		{items.sort(sortItems).map(el => (
			<CardButton key={el.id}>
				<JornalItem 
					title={el.title}
					data={el.date}
					text={el.text}
				/>
			</CardButton>
		))
		}
	</>;
}

export default JornalList;
