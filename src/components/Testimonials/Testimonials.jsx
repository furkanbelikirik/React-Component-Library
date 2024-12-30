import "./Testimonials.css";

const Testimonials = ({ children, picture, name, role }) => {
	return (
		<div className="testimonial">
			<div className="content">
				<img className="logo" src={picture} alt="" />
				<p className="text">{children}</p>
				<p>
					<span className="name">{name} / </span>
					<span className="title">{role}</span>
				</p>
			</div>
		</div>
	);
};

export default Testimonials;
