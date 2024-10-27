import solidLogo from "./assets/solid.svg";
import { Center, styled } from "styled-system/jsx";
import { Ripple } from "./components/mystic-ui/ripple";

function App() {
	return (
		<Center height="screen" overflow="hidden">
			<styled.img
				src={solidLogo}
				width="20"
				filter="auto"
				grayscale="1"
				alt="Solid JS"
			/>
			<Ripple />
		</Center>
	);
}

export default App;
