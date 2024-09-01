import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JornalItem from './components/JornalItem/JornalItem';

// используем функциональный подход
function App() {

	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			date: new Date(),
			text: 'Текст'
		},
		{
			title: 'Поход в горы',
			date: new Date(),
			text: 'Текст'
		}
	];
	return (
	// должен быть один родительский элемент <>
		<>
			<h1>Title</h1>
			<p>Description</p>
			<Button />
			<CardButton>
				<JornalItem 
					title={data[0].title}
					data={data[0].date}
					text={data[0].text}
				/>
			</CardButton>
			<CardButton>
				<JornalItem 
					title={data[1].title}
					data={data[1].date}
					text={data[1].text}
				/>
			</CardButton>
		</>
	);
	// возвращаем jsx разметку, которая потом преобразуется в js код
}

export default App;
