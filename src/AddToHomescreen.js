import * as React from "react";
import { useAddToHomescreenPrompt } from "./useAddToHomescreenPrompt";

function ExampleComponent() {
	const [prompt, promptToInstall] = useAddToHomescreenPrompt();
	const [isVisible, setVisibleState] = React.useState(false);

	const hide = () => setVisibleState(false);

	React.useEffect(() => {
		if (prompt) {
			setVisibleState(true);
		}
	}, [prompt]);

	if (!isVisible) {
		return <div />;
	}

	const style = {
		backgroundColor: "#fff",
		borderRadius: "10px",
		height: "200px",
		width: "350px",
		margin: "0 auto auto",
	};

	const buttonSuccess = {
		backgroundColor: "#fff",
		color: "green",
		border: "none",
		fontSize: "16px",
		fontWeight: "bold",
	};

	const buttonFail = {
		backgroundColor: "#fff",
		color: "red",
		border: "none",
		fontSize: "16px",
		fontWeight: "bold",
	};

	const divButton = {
		display: "flex",
		justifyContent: "space-around",
		margin: "20px 0",
	};

	return (
		<div style={style} onClick={hide}>
			<p
				style={{
					margin: "55px auto 50px",
					textAlign: "center",
					fontSize: "20px",
					lineHeight: "1.5",
				}}
			>
				Hello! Add to Home screen for best experience
			</p>
			<div style={divButton}>
				<button style={buttonFail} onClick={hide}>
					Close
				</button>
				<button style={buttonSuccess} onClick={promptToInstall}>
					Add to homescreen
				</button>
			</div>
		</div>
	);
}

export default ExampleComponent;
