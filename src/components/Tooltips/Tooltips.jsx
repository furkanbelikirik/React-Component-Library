import { useState, useRef, useEffect } from "react";
import "./Tooltips.css";

const Tooltips = ({ children, color, variant, icon, headline, text }) => {
	const [open, setOpen] = useState(false);
	const debounceTimer = useRef(null);
	
	const [topPosition, setTopPosition] = useState(0);
	const tooltipRef = useRef(null);

	const handleMouseOver = () => {
		clearTimeout(debounceTimer.current);
		setOpen(true);
	};

	const handleMouseOut = () => {
		debounceTimer.current = setTimeout(() => setOpen(false), 100);
	};

	useEffect(() => {
		if (tooltipRef.current) {
			const tooltipHeight = tooltipRef.current.offsetHeight;
			setTopPosition(-tooltipHeight);
		}
	}, [open]);

	return (
		<div className="tooltip-container">
			<div className="trigger" style={{ cursor: "pointer" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
				{children}
			</div>

			<div
				className={`tooltip ${color}-${variant} ${open ? "open" : ""}`}
				style={{ top: `${topPosition}px` }}
				ref={tooltipRef}>
				<div className="icon">
					<i className={icon}></i>
				</div>
				<div className="content">
					<p className="title">{headline}</p>
					<p className="text">{text}</p>
				</div>
			</div>
		</div>
	);
};

export default Tooltips;
