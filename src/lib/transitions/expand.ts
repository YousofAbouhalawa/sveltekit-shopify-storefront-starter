import { cubicOut } from 'svelte/easing';

export function expand(
	node: HTMLElement,
	{
		duration = 300,
		easing = cubicOut
	}: {
		duration?: number;
		easing?: (t: number) => number;
	} = {}
) {
	const style = getComputedStyle(node);
	const height = parseFloat(style.height);
	const width = parseFloat(style.width);
	const paddingTop = parseFloat(style.paddingTop);
	const paddingBottom = parseFloat(style.paddingBottom);
	const marginTop = parseFloat(style.marginTop);
	const marginBottom = parseFloat(style.marginBottom);
	const paddingLeft = parseFloat(style.paddingLeft);
	const paddingRight = parseFloat(style.paddingRight);

	return {
		duration,
		easing,
		css: (t: number) => {
			const eased = easing(t);
			return `
				overflow: hidden;
				height: ${eased * height}px;
				width: ${eased * width}px;
				padding-top: ${eased * paddingTop}px;
				padding-bottom: ${eased * paddingBottom}px;
				padding-left: ${eased * paddingLeft}px;
				padding-right: ${eased * paddingRight}px;
				margin-top: ${eased * marginTop}px;
				margin-bottom: ${eased * marginBottom}px;
			`;
		}
	};
}
