import { Ripple } from "@/components/mystic-ui/ripple";
import solidLogo from "./assets/solid.svg";

function App() {
	return (
		<div class="relative h-screen w-full flex items-center justify-center overflow-hidden dark:bg-black">
			<img src={solidLogo} class="w-20 grayscale" alt="Solid JS" />
			<Ripple />
		</div>
	);
}

export default App;
