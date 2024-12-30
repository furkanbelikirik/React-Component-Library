import "./Toasts.css";
import React, { useState, forwardRef } from "react";

const Toasts = forwardRef((props, ref) => {
	const [toast, setToast] = useState(null);
	const [isVisible, setIsVisible] = useState(false);
	const show = ({ variant, title, text, duration = 3000 }) => {
		setToast({ variant, title, text });

		setTimeout(() => {
			setIsVisible(true);
		}, 10);

		setTimeout(() => {
			setIsVisible(false);
			setTimeout(() => setToast(null), 500);
		}, duration);
	};

	const getIcon = (variant) => {
		switch (variant) {
			case "success":
				return <i className="fa-solid fa-circle-check"></i>;
			case "error":
				return <i className="fa-solid fa-circle-xmark"></i>;
			case "info":
				return <i className="fa-solid fa-info-circle"></i>;
			case "warn":
				return <i className="fa-solid fa-exclamation-circle"></i>;
			default:
				return <i className="fa-solid fa-bell"></i>;
		}
	};

	if (ref) {
		ref.current = { show };
	}

	return (
		<div>
			{toast && (
				<div className={`toast to-${toast.variant} ${isVisible ? "show" : ""}`}>
					<div className="icon">{getIcon(toast.variant)}</div>
					<div className="content">
						<p className="title">{toast.title}</p>
						<p className="text">{toast.text}</p>
					</div>
				</div>
			)}
		</div>
	);
});

export default Toasts;
