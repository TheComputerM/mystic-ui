import { animate, inView } from "motion";
import {
	type Component,
	type JSX,
	mergeProps,
	onMount,
	splitProps,
} from "solid-js";

export interface NumberTickerProps extends JSX.HTMLAttributes<HTMLSpanElement> {
	value?: number;
	direction?: "up" | "down";
	delay?: number;
	decimalPlaces?: number;
}

export const NumberTicker: Component<NumberTickerProps> = (props) => {
	const [_localProps, forwardProps] = splitProps(props, [
		"value",
		"direction",
		"delay",
		"decimalPlaces",
	]);
	const localProps = mergeProps(
		{ value: 100, direction: "up" as const, delay: 0, decimalPlaces: 0 },
		_localProps,
	);
	let ref!: HTMLSpanElement;

	onMount(() => {
		inView(ref, () => {
			animate(0, 1, {
				delay: localProps.delay,
				type: "spring",
				damping: 65,
				stiffness: 100,
				onUpdate: (progress) => {
					let latest = progress * localProps.value;
					if (localProps.direction === "down") {
						latest = localProps.value - latest;
					}
					ref.textContent = Intl.NumberFormat("en-US", {
						minimumFractionDigits: localProps.decimalPlaces,
						maximumFractionDigits: localProps.decimalPlaces,
					}).format(Number(latest.toFixed(localProps.decimalPlaces)));
				},
			});
		});
	});

	return <span {...forwardProps} ref={ref} />;
};
