import "./Banners.css";

const Banners = ({ children, variant, type, headline }) => {
	return (
		<div className={`banner ${variant} ${type}`}>
			<div className="banner-icon">
				<i className="fa-solid fa-circle-check"></i>
			</div>
			<div>
				<div className="banner-title">{headline}</div>
				{type === "multi" && <div className="banner-text" style={{ marginTop: ".8em" }}>{children}</div>}
			</div>
		</div>
	);
};

export default Banners;
