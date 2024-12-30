import "./Badges.css";
const Badges = ({ children, variant, color }) => {
	return <span className={`badge badge-${variant} ${color}`}>{children}</span>;
};

export default Badges;
