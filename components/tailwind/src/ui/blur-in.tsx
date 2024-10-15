"use client";

import {
	type JSX,
	type ParentComponent,
	mergeProps,
	splitProps,
} from "solid-js";
import { Motion } from "solid-motionone";

export interface BlurInProps extends JSX.HTMLAttributes<HTMLDivElement> {
	blur?: string;
	duration?: number;
}

export const BlurIn: ParentComponent<BlurInProps> = (props) => {
	const [_localProps, forwardProps] = splitProps(props, [
		"blur",
		"duration",
		"children",
	]);
	const localProps = mergeProps({ blur: "16px", duration: 1 }, _localProps);
	return (
		<Motion.div
			initial={{ filter: `blur(${localProps.blur})`, opacity: 0 }}
			animate={{ filter: "blur(0px)", opacity: 1 }}
			transition={{ duration: localProps.duration }}
			{...forwardProps}
		>
			{localProps.children}
		</Motion.div>
	);
};
