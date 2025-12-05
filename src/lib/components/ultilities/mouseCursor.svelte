<script>
	import { spring } from 'svelte/motion';

	let coords1 = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.05,
			damping: 0.22
		}
	);

	let coords2 = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.23,
			damping: 0.25
		}
	);

	let size = spring(10);

</script>

<svelte:window
	on:mousemove={(e) => {
		coords1.set({ x: e.clientX, y: e.clientY })
		coords2.set({ x: e.clientX, y: e.clientY })
	}}
	on:mousedown={(e) => {
		size.set(20);
	}}
	on:mouseup={(e) => {
		size.set(10);
	}}
/>

<svg
	id="mouseCursor" class ="w-full h-full"
>

   <circle cx={$coords1.x} cy={$coords1.y} r={$size} stroke="#083063" stroke-width="1" fill-opacity="0"/>

	<circle cx={$coords2.x} cy={$coords2.y} r={$size/4} fill="#FF6037"/>
</svg>

<style>
	:global(body) {
		cursor: none;
	}
	
	.w-full {
		width: 100vw;
	}
	
	.h-full {
		height: 100vw;
	}
	
	svg {
		position: fixed;
		top: 0;
		left: 0;
		pointer-events: none;
		z-index: 999;
	}
</style>