import "./styles/style.css";
import { Badges, Banners, Cards, Testimonials, Tooltips, Toasts } from "./components";
import { useRef } from "react";

function App() {
	const toastRef = useRef(null);

	const showSuccess = () => {
		toastRef.current.show({
			variant: "success",
			title: "Success",
			text: "Operation completed successfully!",
			duration: 3000,
		});
	};

	const showError = () => {
		toastRef.current.show({
			variant: "error",
			title: "Error",
			text: "Operation failed!",
			duration: 3000,
		});
	};

	const showInfo = () => {
		toastRef.current.show({
			variant: "info",
			title: "Information",
			text: "Please read updated information.",
			duration: 3000,
		});
	};

	const showWarning = () => {
		toastRef.current.show({
			variant: "warning",
			title: "Warning",
			text: "A network error was detected.",
			duration: 3000,
		});
	};

	return (
		<div className="container">
			<div className="header">
				<h1>Scrimba React Component Library</h1>
				<h3>
					<em>
						<a href="https://github.com/erickmendez/react-component-library">GitHub reposuna gitmek için tıklayın...</a>
					</em>
				</h3>
			</div>

			<h1>Badges</h1>

			<h2>Square</h2>
			<div className="components">
				<Badges variant="square" color="gray">
					Gray
				</Badges>
				<Badges variant="square" color="red">
					Red
				</Badges>
				<Badges variant="square" color="yellow">
					Yellow
				</Badges>
				<Badges variant="square" color="green">
					Green
				</Badges>
				<Badges variant="square" color="blue">
					Blue
				</Badges>
				<Badges variant="square" color="indigo">
					Indigo
				</Badges>
				<Badges variant="square" color="purple">
					Purple
				</Badges>
				<Badges variant="square" color="pink">
					Pink
				</Badges>
			</div>

			<h2>Pill</h2>

			<div className="components">
				<Badges variant="pill" color="gray">
					Gray
				</Badges>
				<Badges variant="pill" color="red">
					Red
				</Badges>
				<Badges variant="pill" color="yellow">
					Yellow
				</Badges>
				<Badges variant="pill" color="green">
					Green
				</Badges>
				<Badges variant="pill" color="blue">
					Blue
				</Badges>
				<Badges variant="pill" color="indigo">
					Indigo
				</Badges>
				<Badges variant="pill" color="purple">
					Purple
				</Badges>
				<Badges variant="pill" color="pink">
					Pink
				</Badges>
			</div>

			<h1>Banners</h1>
			<h2>Success</h2>
			<h3>Multi Line</h3>
			<Banners variant="success" type="multi" headline="Congratulations!">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
			</Banners>
			<h3>Single Line</h3>
			<Banners variant="success" type="single" headline="Congratulations!"></Banners>

			<h2>Warning</h2>
			<h3>Multi Line</h3>
			<Banners variant="warning" type="multi" headline="Attention">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
			</Banners>
			<h3>Single Line</h3>
			<Banners variant="warning" type="single" headline="Attention"></Banners>

			<h2>Error</h2>
			<h3>Multi Line</h3>
			<Banners variant="error" type="multi" headline="There is a problem with your application">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
			</Banners>
			<h3>Single Line</h3>
			<Banners variant="error" type="single" headline="There is a problem with your application"></Banners>

			<h2>Neutral</h2>
			<h3>Multi Line</h3>
			<Banners variant="neutral" type="multi" headline="Update available">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
			</Banners>
			<h3>Single Line</h3>
			<Banners variant="neutral" type="single" headline="Update available"></Banners>

			<h1>Cards</h1>
			<Cards headline="Easy Deployment" icon="fa-solid fa-cloud-arrow-up">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</Cards>

			<h1>Testimonials</h1>
			<Testimonials
				picture="https://i.imgur.com/YIYmJse.png"
				pictureAlt="Workcation"
				name="May Andersons"
				role="Workcation, CTO">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</Testimonials>

			<h1>Tooltips</h1>
			<div className="components">
				<Tooltips
					headline="Black Bold"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
					color="black"
					variant="bold"
					icon="fa-solid fa-circle-check">
					<Badges variant="square" color="gray">
						Black Bold
					</Badges>
				</Tooltips>

				<Tooltips
					headline="Black Light"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
					color="black"
					variant="light"
					icon="fa-solid fa-circle-check">
					<Badges variant="square" color="gray">
						Black Light
					</Badges>
				</Tooltips>

				<Tooltips
					headline="Blue Bold"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
					color="blue"
					variant="bold"
					icon="fa-solid fa-circle-check">
					<Badges variant="square" color="blue">
						Blue Bold
					</Badges>
				</Tooltips>

				<Tooltips
					headline="Blue Light"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
					color="blue"
					variant="light"
					icon="fa-solid fa-circle-check">
					<Badges variant="square" color="blue">
						Blue Light
					</Badges>
				</Tooltips>

				<Tooltips
					headline="Pink Bold"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
					color="pink"
					variant="bold"
					icon="fa-solid fa-circle-check">
					<Badges variant="square" color="pink">
						Pink Bold
					</Badges>
				</Tooltips>

				<Tooltips
					headline="Pink Light"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
					color="pink"
					variant="light"
					icon="fa-solid fa-circle-check">
					<Badges variant="square" color="pink">
						Pink Light
					</Badges>
				</Tooltips>

				<Tooltips
					headline="Green Bold"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
					color="green"
					variant="bold"
					icon="fa-solid fa-circle-check">
					<Badges variant="square" color="green">
						Green Bold
					</Badges>
				</Tooltips>

				<Tooltips
					headline="Green Light"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
					color="green"
					variant="light"
					icon="fa-solid fa-circle-check">
					<Badges variant="square" color="green">
						Green Light
					</Badges>
				</Tooltips>
			</div>

			<h1>Toasts</h1>

			<Toasts ref={toastRef} />
			<div className="components">
				<button className="toast-btn success" onClick={showSuccess}>
					Success
				</button>
				<button className="toast-btn error" onClick={showError}>
					Error
				</button>
				<button className="toast-btn info" onClick={showInfo}>
					Info
				</button>
				<button className="toast-btn warning" onClick={showWarning}>
					Warning
				</button>
			</div>

			<div className="footer">
				<a href="https://github.com/furkanbelikirik">Furkan Belikırık</a> /{" "}
				<a href="https://scrimba.com/the-frontend-developer-career-path-c0j">Scrimba</a>
			</div>
		</div>
	);
}

export default App;
