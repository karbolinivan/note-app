import styles from './JornalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JornalForm.state';

function JornalForm({ onSubmit }) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;

  useEffect(() => {
    let timerId;
    if (!isValid.date || !isValid.post || !isValid.title) {
      timerId = setTimeout(() => {
        dispatchForm({ type: 'RESET_VALIDITY' });
      }, 2000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
      dispatchForm({ type: 'CLEAR' });
    }
  }, [isFormReadyToSubmit]);

  const onChange = (e) => {
    dispatchForm({
      type: 'SET_VALUE',
      payload: { [e.target.name]: e.target.value },
    });
  };

  const addJornalItem = (e) => {
    e.preventDefault();
    dispatchForm({ type: 'SUBMIT' });
  };

  return (
    <>
      <form className={styles['jornal-form']} onSubmit={addJornalItem}>
        <div>
          <input
            type="text"
            onChange={onChange}
            value={values.title}
            name="title"
            className={cn(styles['input-title'], {
              [styles['invalid']]: !formState.isValid.title,
            })}
          />
        </div>
        <div className={styles['form-row']}>
          <label htmlFor="date" className={styles['form-label']}>
            <img src="/calendar.svg" alt="Календарь"></img>
            <span>Дата</span>
          </label>
          <input
            type="date"
            onChange={onChange}
            value={values.date}
            id="date"
            name="date"
            className={cn(styles['input'], {
              [styles['invalid']]: !formState.isValid.date,
            })}
          />
        </div>
        <div className={styles['form-row']}>
          <label htmlFor="tag" className={styles['form-label']}>
            <img src="/tag.svg" alt="Метка"></img>
            <span>Метки</span>
          </label>
          <input
            type="text"
            onChange={onChange}
            value={values.tag}
            id="tag"
            name="tag"
            className={cn(styles['input'])}
          />
        </div>
        <textarea
          onChange={onChange}
          value={values.post}
          id=""
          name="post"
          className={cn(styles['input'], {
            [styles['invalid']]: !formState.isValid.post,
          })}
        ></textarea>
        <Button text="Сохранить" />
      </form>
    </>
  );
}

export default JornalForm;
