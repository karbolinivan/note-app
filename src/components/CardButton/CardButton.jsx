import './CardButton.css';

// в сршдвкут передается дочерний элемент
function CardButton({ children }) {
	return (
		<>
			<button className="card-button">{children}</button>
		</>
	);
}

export default CardButton;
// позволяет переиспользовать кнопку под разные дочерние элементы (композиция)
// дочерний элемент - это другие компоненты