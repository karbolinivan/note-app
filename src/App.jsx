import './App.css';
import CardButton from './components/CardButton/CardButton';
import JornalItem from './components/JornalItem/JornalItem';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JornalList from './components/JornalList/JornalList';
import JornalAddButton from './components/JornalAddButton/JornalAddButton';
import JornalForm from './components/JornalForm/JornalForm';
import { useState } from 'react';



const INITIAL_DATA = [
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



// используем функциональный подход
function App() {
	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = item => {
		setItems(oldItems => [...oldItems, {
			text: item.text,
			title: item.title,
			date: new  Date(item.date)
		}]);
	};

	return (
	// должен быть один родительский элемент <>
		<div className='app'>
			<LeftPanel>
				<Header />
				<JornalAddButton />
				<JornalList>
					{items.map(el => {
						<CardButton>
							<JornalItem 
								title={el.title}
								data={el.date}
								text={el.text}
							/>
						</CardButton>;
					})}
				</JornalList>
			</LeftPanel>
			<Body>
				<JornalForm onSubmit={addItem}/>
			</Body>
		</div>
	);
	// возвращаем jsx разметку, которая потом преобразуется в js код
}

export default App;
