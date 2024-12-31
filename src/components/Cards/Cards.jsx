import "./Cards.css";

const Cards = ({ children, headline, icon }) => {
	return (
		<div className="card">
			
				<div className="icon">
					<i className={icon}></i>
				</div>
				<div className="card-content">
					<h4>{headline}</h4>
					{children}
				</div>
			
		</div>
	);
};

export default Cards;
