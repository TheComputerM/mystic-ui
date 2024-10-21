import { cn } from "@/lib/utils";
import { spring } from "motion";
import {
	type Accessor,
	type JSX,
	type ParentComponent,
	createContext,
	createSignal,
	mergeProps,
	splitProps,
	useContext,
} from "solid-js";
import { Motion } from "solid-motionone";

export interface DockProps extends JSX.HTMLAttributes<HTMLDivElement> {
	magnification?: number;
	distance?: number;
}

const DockContext = createContext<{
	mouseX: Accessor<number>;
	magnification: number;
	distance: number;
}>();

export const Dock: ParentComponent<DockProps> = (props) => {
	const [_localProps, forwardProps] = splitProps(props, ["class", "children"]);
	const localProps = mergeProps(
		{ magnification: 60, distance: 150 },
		_localProps,
	);
	const [mouseX, setMouseX] = createSignal(Number.POSITIVE_INFINITY);

	return (
		<div
			class={cn(
				"supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 flex items-end h-[58px] w-max gap-2 rounded-2xl border p-2 backdrop-blur-md",
				localProps.class,
			)}
			{...forwardProps}
			onMouseMove={(e) => setMouseX(e.pageX)}
			onMouseLeave={() => setMouseX(Number.POSITIVE_INFINITY)}
		>
			<DockContext.Provider
				value={{
					mouseX,
					magnification: localProps.magnification,
					distance: localProps.distance,
				}}
			>
				{localProps.children}
			</DockContext.Provider>
		</div>
	);
};

export interface DockIconProps extends JSX.HTMLAttributes<HTMLDivElement> {}

export const DockIcon: ParentComponent<DockIconProps> = (props) => {
	const [localProps, forwardProps] = splitProps(props, ["class", "children"]);

	const dockContext = useContext(DockContext);
	if (!dockContext) {
		throw new Error("DockIcon must be used within a Dock");
	}

	let ref!: HTMLDivElement;

	const distance = () => {
		const bounds = ref?.getBoundingClientRect() ?? { x: 0, width: 0 };
		// track mouse position relative to icon till |150| units
		return Math.min(
			Math.max(
				dockContext.mouseX() - bounds.x - bounds.width / 2,
				-1 * dockContext.distance,
			),
			dockContext.distance,
		);
	};

	const baseWidth = 40;

	const width = () =>
		((150 - Math.abs(distance())) / 150) *
			(dockContext.magnification - baseWidth) +
		baseWidth;

	return (
		<Motion.div
			ref={ref}
			class={cn(
				"flex aspect-square cursor-pointer items-center justify-center rounded-full",
				localProps.class,
			)}
			initial={{ width: `${baseWidth}px` }}
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
