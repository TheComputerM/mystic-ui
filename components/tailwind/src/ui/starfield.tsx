import {
	type Component,
	type JSX,
	createEffect,
	mergeProps,
	onMount,
	splitProps,
} from "solid-js";

// adapted from: https://github.com/Ashikpaul/Starfield-effect

export interface StarfieldProps
	extends JSX.CanvasHTMLAttributes<HTMLCanvasElement> {
	background?: string;
	color?: string;
	quantity?: number;
	size?: number;
	speed?: number;
}

export const Starfield: Component<StarfieldProps> = (props) => {
	const [_localProps, forwardProps] = splitProps(props, [
		"background",
		"color",
		"quantity",
		"size",
		"speed",
	]);
	const localProps = mergeProps(
		{
			background: "rgba(0, 0, 0, 0.1)",
			color: "rgb(100, 100, 100)",
			quantity: 500,
			size: 1,
			speed: 0.04,
		},
		_localProps,
	);

	let canvasRef!: HTMLCanvasElement;
	let ctx!: CanvasRenderingContext2D;

	class Star {
		x: number;
		y: number;
		z: number;
		px: number;
		py: number;
		constructor() {
			this.x = Math.random() * canvasRef.width - canvasRef.width / 2;
			this.y = Math.random() * canvasRef.height - canvasRef.height / 2;
			this.px = this.x;
			this.py = this.y;
			this.z = Math.random() * 4;
		}

		update() {
			this.px = this.x;
			this.py = this.y;
			this.z += localProps.speed;
			this.x += this.x * (localProps.speed * 0.2) * this.z;
			this.y += this.y * (localProps.speed * 0.2) * this.z;
			if (
				this.x > canvasRef.width / 2 + 50 ||
				this.x < -canvasRef.width / 2 - 50 ||
				this.y > canvasRef.height / 2 + 50 ||
				this.y < -canvasRef.height / 2 - 50
			) {
				this.x = Math.random() * canvasRef.width - canvasRef.width / 2;
				this.y = Math.random() * canvasRef.height - canvasRef.height / 2;
				this.px = this.x;
				this.py = this.y;
				this.z = 0;
			}
		}

		draw() {
			ctx.lineWidth = this.z * localProps.size;
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(this.px, this.py);
			ctx.stroke();
		}
	}

	createEffect(() => {
		ctx.fillStyle = localProps.background;
		ctx.strokeStyle = localProps.color;
	});

	onMount(() => {
		ctx.translate(canvasRef.width / 2, canvasRef.height / 2);
	});

	createEffect(() => {
		const stars = Array.from({ length: localProps.quantity }, () => new Star());

		let animationHandle: number;
		function draw() {
			ctx.fillRect(
				-canvasRef.width / 2,
				-canvasRef.height / 2,
				canvasRef.width,
				canvasRef.height,
			);
			for (const star of stars) {
				star.update();
				star.draw();
			}
			animationHandle = requestAnimationFrame(draw);
		}

		draw();

		return () => cancelAnimationFrame(animationHandle);
	});

	return (
		<canvas
			ref={(canvas) => {
				canvasRef = canvas;
				ctx = canvas.getContext("2d")!;
			}}
			{...forwardProps}
		/>
	);
};
