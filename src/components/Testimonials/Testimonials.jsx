import "./Testimonials.css";

const Testimonials = ({ children, picture, name, role }) => {
	return (
		<div className="testimonial">
			<div className="content">
				<div className="logo">
					<img className="logo" src={picture} alt="" />
				</div>
				<div className="text">{children}</div>
				<div className="footer">
					<span className="name">{name}</span>
					<span>/</span>
					<span className="title">{role}</span>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
