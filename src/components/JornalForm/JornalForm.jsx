import styles from './JornalForm.module.css';
import Button from '../Button/Button';
import { useState } from 'react';
import cn from 'classnames';

function JornalForm({ onSubmit }) {
	const [formValidState, setFormValidState] = useState({
		title: true,
		post: true,
		date: true
	});

	const addJornalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		let  isFormValid = true;
		if (!formProps.title?.trim().length) {
			setFormValidState(state => ({ ...state, title: false }));
			isFormValid = false;
		} else {
			setFormValidState(state => ({ ...state, title: true }));
		}
		if (!formProps.post?.trim().length) {
			setFormValidState(state => ({ ...state, post: false }));
			isFormValid = false;
		} else {
			setFormValidState(state => ({ ...state, post: true }));
		}
		if (!formProps.date) {
			setFormValidState(state => ({ ...state, date: false }));
			isFormValid = false;
		} else { 
			setFormValidState(state => ({ ...state, date: true }));

		}
		if (!isFormValid) {
			return;
		}
		onSubmit(formProps);
	};

	return (
		<>
			<form className={styles['jornal-form']} onSubmit={addJornalItem}>
				<div>
					<input type='text' name='title' className={cn(styles['input-title'], {
						[styles['invalid']]: !formValidState.title
					})}/>
				</div>
				<div className={styles['form-row']}>
					<label htmlFor='date' className={styles['form-label']}>
						<img src='/calendar.svg' alt='Календарь'></img>
						<span>Дата</span>
					</label>
					<input type='date' id='date' name='date' className={cn(styles['input'], {
						[styles['invalid']]: !formValidState.date
					})}/>
				</div>

				<div className={styles['form-row']}>
					<label htmlFor='ta' className={styles['form-label']}>
						<img src='/tag.svg' alt='Метка'></img>
						<span>Метки</span>
					</label>
					<input type='text' id='tag' name='tag' className={cn(styles['input'])}/>			
				</div>
			
				<textarea name="post" id="" className={cn(styles['input'], {
					[styles['invalid']]: !formValidState.post
				})} ></textarea>
				<Button text='Сохранить' />
			</form>
		</>
	);
}

export default JornalForm;