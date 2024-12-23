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
import { css, cx } from "styled-system/css";

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
			class={cx(
				css({
					display: "flex",
					alignItems: "flex-end",
					height: "58px",
					width: "max",
					gap: "2",
					borderRadius: "2xl",
					borderWidth: "1px",
					borderColor: "neutral.300",
					_dark: { borderColor: "neutral.700" },
					padding: "2",
					backdropFilter: "auto",
					backdropBlur: "md",
				}),
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
		<div
			ref={ref}
			class={cx(
				css({
					display: "flex",
					aspectRatio: "1",
					cursor: "pointer",
					alignItems: "center",
					justifyContent: "center",
					borderRadius: "full",
				}),
				localProps.class,
			)}
			style={{ width: `${width()}px` }}
			{...forwardProps}
		>
			{localProps.children}
		</div>
	);
};
