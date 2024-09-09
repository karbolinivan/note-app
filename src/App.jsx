import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JornalList from './components/JornalList/JornalList';
import JornalAddButton from './components/JornalAddButton/JornalAddButton';
import JornalForm from './components/JornalForm/JornalForm';
import { useState } from 'react';



const INITIAL_DATA = [
];

// используем функциональный подход
function App() {
	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = item => {
		setItems(oldItems => [...oldItems, {
			id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1,
			text: item.text,
			title: item.title,
			date: new Date(item.date)
		}]);
	};


	return (
	// должен быть один родительский элемент <>
		<div className='app'>
			<LeftPanel>
				<Header />
				<JornalAddButton />
				<JornalList items={items} />
			</LeftPanel>
			<Body>
				<JornalForm onSubmit={addItem}/>
			</Body>
		</div>
	);
	// возвращаем jsx разметку, которая потом преобразуется в js код
}

export default App;
