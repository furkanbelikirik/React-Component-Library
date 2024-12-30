import "./Banners.css";


const Banners = ({ children, variant, type, headline }) => {
	return (
		<div className={`banner ${variant} ${type}`}>
			<span>
				<i className="fa-solid fa-circle-check"></i>
				{headline}
			</span>
			{type === "multi" && <p>{children}</p>}
		</div>
	);
};

export default Banners;
