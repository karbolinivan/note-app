import './JornalItem.css';

function JornalItem() {
  const title = 'Подготовка к обновлению курсов';
  const date = new Date();
  const text = 'Текст';
  return (
    <>
      <div className="jornal-item">
        <h2 className="jornal-item__header">{title}</h2>
        <h2 className="jornal-item__body">
          <div className="jornal-item__date">{date.toString()}</div>
          <div className="jornal-item__text">{text}</div>
        </h2>
      </div>
    </>
  );
}

export default JornalItem;
