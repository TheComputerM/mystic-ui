import { animate, inView, spring } from "motion";
import {
	type Component,
	type JSX,
	mergeProps,
	onMount,
	splitProps,
} from "solid-js";

interface NumberTickerProps extends JSX.HTMLAttributes<HTMLSpanElement> {
	value?: number;
	direction?: "up" | "down";
	delay?: number;
	decimalPlaces?: number;
}

const NumberTicker: Component<NumberTickerProps> = (props) => {
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
			animate(
				(progress) => {
					let latest = progress * localProps.value;
					if (localProps.direction === "down") {
						latest = localProps.value - latest;
					}
					ref.textContent = Intl.NumberFormat("en-US", {
						minimumFractionDigits: localProps.decimalPlaces,
						maximumFractionDigits: localProps.decimalPlaces,
					}).format(Number(latest.toFixed(localProps.decimalPlaces)));
				},
				{
					delay: localProps.delay,
					easing: spring({ stiffness: 100, damping: 60 }),
				},
			);
		});
	});

	return <span {...forwardProps} ref={ref} />;
};

export default NumberTicker;
