import "./styles/style.css";
import { Badges, Banners, Cards, Testimonials, Tooltips, Toasts } from "./components";
import { useRef } from "react";

function App() {
	/* Toasts */
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
			<header>
				<svg xmlns="http://www.w3.org/2000/svg" className="logo" viewBox="0 0 576 512">
					<path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
				</svg>
				<h1>Scrimba React Component Library</h1>
				<h3>
					<em>
						<a href="https://github.com/furkanbelikirik/react-component-library">
							GitHub reposuna gitmek için tıklayın...
						</a>
					</em>
				</h3>
			</header>

			<section>
				<h2>Badges</h2>

				<h3>Square</h3>
				<div className="badges">
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

				<h3>Pill</h3>

				<div className="badges">
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
			</section>

			<section>
				<h2>Banners</h2>
				<h3>Multi Line</h3>
				<div className="banners">
					<Banners variant="success" type="multi" headline="Congratulations!">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
					</Banners>
					<Banners variant="warning" type="multi" headline="Attention">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
					</Banners>
					<Banners variant="error" type="multi" headline="There is a problem with your application">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
					</Banners>
					<Banners variant="neutral" type="multi" headline="Update available">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
					</Banners>
				</div>
				<h3>Single Line</h3>
				<div className="banners">
					<Banners variant="success" type="single" headline="Congratulations!"></Banners>
					<Banners variant="warning" type="single" headline="Attention"></Banners>
					<Banners variant="error" type="single" headline="There is a problem with your application"></Banners>
					<Banners variant="neutral" type="single" headline="Update available"></Banners>
				</div>
			</section>

			<section>
				<h2 style={{ marginBottom: "2em" }}>Cards</h2>
				<Cards headline="Easy Deployment" icon="fa-solid fa-cloud-arrow-up">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</Cards>
			</section>

			<section>
				<h2>Testimonials</h2>
				<Testimonials
					picture="https://i.imgur.com/YIYmJse.png"
					pictureAlt="Workcation"
					name="May Andersons"
					role="Workcation, CTO">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</Testimonials>
			</section>

			<section>
				<h2>Tooltips</h2>
				<div className="tooltips">
					<div className="tooltips-column">
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
							headline="Green Bold"
							text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
							color="green"
							variant="bold"
							icon="fa-solid fa-circle-check">
							<Badges variant="square" color="green">
								Green Bold
							</Badges>
						</Tooltips>
					</div>
					<div className="tooltips-column">
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
				</div>
			</section>

			<section>
				<h2>Toasts</h2>

				<Toasts ref={toastRef} />
				<div className="toasts">
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
			</section>

			<footer>
				<a href="https://github.com/furkanbelikirik">Furkan Belikırık</a> /{" "}
				<a href="https://scrimba.com/the-frontend-developer-career-path-c0j">Scrimba</a>
			</footer>
		</div>
	);
}

export default App;
