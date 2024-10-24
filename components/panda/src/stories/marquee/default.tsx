import { css } from "styled-system/css";
import { Marquee } from "@/ui/marquee";
import { For } from "solid-js";

const reviews = [
	{
		name: "Jack",
		username: "@jack",
		body: "I've never seen anything like this before. It's amazing. I love it.",
		img: "https://avatar.vercel.sh/jack",
	},
	{
		name: "Jill",
		username: "@jill",
		body: "I don't know what to say. I'm speechless. This is amazing.",
		img: "https://avatar.vercel.sh/jill",
	},
	{
		name: "John",
		username: "@john",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "https://avatar.vercel.sh/john",
	},
];

const ReviewCard = ({
	img,
	name,
	username,
	body,
}: { img: string; name: string; username: string; body: string }) => {
	return (
		<figure
			class={css({
				position: "relative",
				width: "64",
				cursor: "pointer",
				overflow: "hidden",
				borderRadius: "xl",
				borderWidth: "1px",
				padding: "4",

				// light styles
				borderColor: "gray.950/10",
				backgroundColor: "gray.950/1",

				// dark styles
				_dark: {
					borderColor: "gray.50/10",
					backgroundColor: "gray.50/1",
				},
				_hover: {
					backgroundColor: "gray.950/5",
					_dark: { backgroundColor: "gray.50/15" },
				},
			})}
		>
			<div
				class={css({
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					gap: "2",
				})}
			>
				<img
					class={css({ borderRadius: "full" })}
					width="32"
					height="32"
					alt="avatar-img"
					src={img}
				/>
				<div class={css({ display: "flex", flexDirection: "column" })}>
					<span
						class={css({
							fontSize: "sm",
							lineHeight: "sm",
							fontWeight: "medium",
							_dark: { color: "white" },
						})}
					>
						{name}
					</span>
					<p
						class={css({
							fontSize: "xs",
							lineHeight: "xs",
							fontWeight: "medium",
							_dark: { color: "white/40" },
						})}
					>
						{username}
					</p>
				</div>
			</div>
			<blockquote
				class={css({ marginTop: "2", fontSize: "sm", lineHeight: "sm" })}
			>
				{body}
			</blockquote>
		</figure>
	);
};

export default function MarqueeDemo() {
	return (
		<div
			class={css({
				position: "relative",
				overflow: "hidden",
			})}
		>
			<Marquee pauseOnHover duration={20}>
				<For each={reviews}>{(review) => <ReviewCard {...review} />}</For>
			</Marquee>
			<Marquee reverse pauseOnHover>
				<For each={reviews}>{(review) => <ReviewCard {...review} />}</For>
			</Marquee>
			<div
				class={css({
					pointerEvents: "none",
					position: "absolute",
					insetY: "0",
					left: "0",
					width: "1/3",
					bgGradient: "to-r",
					gradientTo: "transparent",
					gradientFrom: "white",
					_dark: { gradientFrom: "black" },
				})}
			/>
			<div
				class={css({
					pointerEvents: "none",
					position: "absolute",
					insetY: "0",
					right: "0",
					width: "1/3",
					bgGradient: "to-l",
					gradientTo: "transparent",
					gradientFrom: "white",
					_dark: { gradientFrom: "black" },
				})}
			/>
		</div>
	);
}
