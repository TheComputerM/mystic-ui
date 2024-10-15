import { cn } from "@/lib/utils";
import { spring } from "motion";
import {
	type JSX,
	splitProps,
	type ParentComponent,
	createContext,
	useContext,
	createSignal,
	type Accessor,
} from "solid-js";
import { Motion } from "solid-motionone";

export interface DockProps extends JSX.HTMLAttributes<HTMLDivElement> {
	magnification?: number;
	distance?: number;
}

const DockContext = createContext<Accessor<number>>();

export const Dock: ParentComponent<DockProps> = (props) => {
	const [localProps, forwardProps] = splitProps(props, ["class", "children"]);
	const [mouseX, setMouseX] = createSignal(Number.POSITIVE_INFINITY);

	return (
		<div
			class={cn(
				"supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 flex h-[58px] w-max gap-2 rounded-2xl border p-2 backdrop-blur-md",
				localProps.class,
			)}
			{...forwardProps}
			onMouseMove={(e) => setMouseX(e.pageX)}
			onMouseLeave={() => setMouseX(Number.POSITIVE_INFINITY)}
		>
			<DockContext.Provider value={mouseX}>
				{localProps.children}
			</DockContext.Provider>
		</div>
	);
};

export interface DockIconProps extends JSX.HTMLAttributes<HTMLDivElement> {}

export const DockIcon: ParentComponent<DockIconProps> = (props) => {
	const [localProps, forwardProps] = splitProps(props, ["class", "children"]);
	const mouseX = useContext(DockContext);
	if (!mouseX) {
		throw new Error("DockIcon must be used within a Dock");
	}

	let ref!: HTMLDivElement;

	const distance = () => {
		const bounds = ref?.getBoundingClientRect() ?? { x: 0, width: 0 };
		return Math.min(
			Math.max(mouseX() - bounds.x - bounds.width / 2, -150),
			150,
		);
	};

	const width = () => ((150 - Math.abs(distance())) / 150) * 20 + 40;

	return (
		<Motion.div
			ref={ref}
			class={cn(
				"flex aspect-square cursor-pointer items-center justify-center rounded-full",
				localProps.class,
			)}
			initial={{ width: "40px" }}
			animate={{ width: `${width()}px` }}
			transition={{
				easing: spring({ mass: 0.1, stiffness: 150, damping: 12 }),
			}}
			{...forwardProps}
		>
			{localProps.children}
		</Motion.div>
	);
};
