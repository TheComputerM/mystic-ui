import { animate } from "motion";
import {
	type Component,
	createEffect,
	createSignal,
	createUniqueId,
	mergeProps,
	onCleanup,
	onMount,
} from "solid-js";
import { css, cx } from "styled-system/css";

export interface AnimatedBeamProps {
	class?: string;
	containerRef: HTMLElement;
	fromRef: HTMLElement;
	toRef: HTMLElement;
	curvature?: number;
	reverse?: boolean;
	pathColor?: string;
	pathWidth?: number;
	pathOpacity?: number;
	gradientStartColor?: string;
	gradientStopColor?: string;
	delay?: number;
	duration?: number;
	startXOffset?: number;
	startYOffset?: number;
	endXOffset?: number;
	endYOffset?: number;
}

export const AnimatedBeam: Component<AnimatedBeamProps> = (props) => {
	const localProps = mergeProps(
		{
			curvature: 0,
			reverse: false, // Include the reverse prop
			duration: Math.random() * 3 + 4,
			delay: 0,
			pathColor: "gray",
			pathWidth: 2,
			pathOpacity: 0.2,
			gradientStartColor: "#ffaa40",
			gradientStopColor: "#9c40ff",
			startXOffset: 0,
			startYOffset: 0,
			endXOffset: 0,
			endYOffset: 0,
		},
		props,
	);

	const id = createUniqueId();
	const [pathD, setPathD] = createSignal("");
	const [svgDimensions, setSvgDimensions] = createSignal({
		width: 0,
		height: 0,
	});

	// Calculate the gradient coordinates based on the reverse prop
	const gradientCoordinates = localProps.reverse
		? {
				x1: [90, -10],
				x2: [100, 0],
				y1: [0, 0],
				y2: [0, 0],
			}
		: {
				x1: [10, 110],
				x2: [0, 100],
				y1: [0, 0],
				y2: [0, 0],
			};

	createEffect(() => {
		const updatePath = () => {
			if (localProps.containerRef && localProps.fromRef && localProps.toRef) {
				const containerRect = localProps.containerRef.getBoundingClientRect();
				const rectA = localProps.fromRef.getBoundingClientRect();
				const rectB = localProps.toRef.getBoundingClientRect();

				const svgWidth = containerRect.width;
				const svgHeight = containerRect.height;
				setSvgDimensions({ width: svgWidth, height: svgHeight });

				const startX =
					rectA.left -
					containerRect.left +
					rectA.width / 2 +
					localProps.startXOffset;
				const startY =
					rectA.top -
					containerRect.top +
					rectA.height / 2 +
					localProps.startYOffset;
				const endX =
					rectB.left -
					containerRect.left +
					rectB.width / 2 +
					localProps.endXOffset;
				const endY =
					rectB.top -
					containerRect.top +
					rectB.height / 2 +
					localProps.endYOffset;

				const controlY = startY - localProps.curvature;
				const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
				setPathD(d);
			}
		};

		// Initialize ResizeObserver
		const resizeObserver = new ResizeObserver((entries) => {
			// For all entries, recalculate the path
			for (const entry of entries) {
				updatePath();
			}
		});

		// Observe the container element
		if (localProps.containerRef) {
			resizeObserver.observe(localProps.containerRef);
		}

		// Call the updatePath initially to set the initial path
		updatePath();

		// Clean up the observer on component unmount
		onCleanup(resizeObserver.disconnect);
	});

	let linearGradient!: SVGLinearGradientElement;
	onMount(() => {
		const controls = animate(
			(p) => {
				linearGradient.setAttribute(
					"x1",
					`${gradientCoordinates.x1[1] * p + gradientCoordinates.x1[0] * (1 - p)}%`,
				);
				linearGradient.setAttribute(
					"x2",
					`${gradientCoordinates.x2[1] * p + gradientCoordinates.x2[0] * (1 - p)}%`,
				);
				linearGradient.setAttribute(
					"y1",
					`${gradientCoordinates.y1[1] * p + gradientCoordinates.y1[0] * (1 - p)}%`,
				);
				linearGradient.setAttribute(
					"y2",
					`${gradientCoordinates.y2[1] * p + gradientCoordinates.y2[0] * (1 - p)}%`,
				);
			},
			{
				delay: localProps.delay,
				duration: localProps.duration,
				easing: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
				repeat: Number.POSITIVE_INFINITY,
			},
		);

		onCleanup(controls.stop);
	});

	return (
		<svg
			fill="none"
			aria-hidden="true"
			width={svgDimensions().width}
			height={svgDimensions().height}
			xmlns="http://www.w3.org/2000/svg"
			class={cx(
				css({
					pointerEvents: "none",
					position: "absolute",
					left: "0",
					top: "0",
					strokeWidth: "2",
				}),
				localProps.class,
			)}
			viewBox={`0 0 ${svgDimensions().width} ${svgDimensions().height}`}
		>
			<path
				d={pathD()}
				stroke={localProps.pathColor}
				stroke-width={localProps.pathWidth}
				stroke-opacity={localProps.pathOpacity}
				stroke-linecap="round"
			/>
			<path
				d={pathD()}
				stroke-width={localProps.pathWidth}
				stroke={`url(#${id})`}
				stroke-opacity="1"
				stroke-linecap="round"
			/>
			<defs>
				<linearGradient
					id={id}
					gradientUnits="userSpaceOnUse"
					ref={linearGradient}
				>
					<stop stop-color={localProps.gradientStartColor} stop-opacity="0" />
					<stop stop-color={localProps.gradientStartColor} />
					<stop offset="32.5%" stop-color={localProps.gradientStopColor} />
					<stop
						offset="100%"
						stop-color={localProps.gradientStopColor}
						stop-opacity="0"
					/>
				</linearGradient>
			</defs>
		</svg>
	);
};
