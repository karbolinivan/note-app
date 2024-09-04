import './App.css';
import CardButton from './components/CardButton/CardButton';
import JornalItem from './components/JornalItem/JornalItem';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JornalList from './components/JornalList/JornalList';
import JornalAddButton from './components/JornalAddButton/JornalAddButton';

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
		<div className='app'>
			<LeftPanel>
				<Header />
				<JornalAddButton />
				<JornalList>
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
				</JornalList>
			</LeftPanel>
			<Body>
				Body
			</Body>
		</div>
	);
	// возвращаем jsx разметку, которая потом преобразуется в js код
}

export default App;
