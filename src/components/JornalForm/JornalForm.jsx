import './JornalForm.css';
import Button from '../Button/Button';

function JornalForm({ onSubmit }) {

	const addJornalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		onSubmit(formProps);
		console.log(formProps);

	};

	return (
		<>
			<form className='jornal-form' onSubmit={addJornalItem}>
				<input type='text' name='title' />
				<input type='date' name='date' />
				<input type='text' name='tag' />
				<textarea name="text" id="" ></textarea>
				<Button text='Сохранить' onClick={() => {console.log('asdas');}}/>
			</form>
		</>
	);
}

export default JornalForm;