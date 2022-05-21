import { Component, For, onMount } from "solid-js";

const Footer: Component = (props) => {
 
	return (
		<footer class="flex flex-col items-center justify-center w-full bg-gray-700 p-8">
			<div class="w-4/5 flex items-end justify-end text-white">
				<p class="mr-4">made by: </p>
				<a class="underline decoration-solid decoration-white hover:decoration-slate-300 hover:text-slate-300" href="http://tymon.the-milkyway.space/">this guy</a>
			</div>
		</footer>
	);
};

export default Footer;