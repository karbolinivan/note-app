import './JornalForm.css';
import { useState } from 'react';
import Button from '../Button/Button';

function JornalForm() {

	const [inputData, setInputData] = useState('');

	
	const inputChange = (event) => {
		setInputData(event.target.value);
		console.log(inputData);
		
	};

	const addJornalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);

	};

	return (
		<>
			<form className='jornal-form' onSubmit={addJornalItem}>
				<input type='text' name='title' />
				<input type='date' name='date' />
				<input type='text' name='tag' value={inputData} onChange={inputChange} />
				<textarea name="post" id="" ></textarea>
				<Button text='Сохранить' onClick={() => {console.log('asdas');}}/>
			</form>
		</>
	);
}

export default JornalForm;