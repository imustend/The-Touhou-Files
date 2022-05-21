import { Component } from "solid-js";

const Header: Component = () => {
 
	return (
		<header class="flex flex-col items-center justify-center w-full bg-gray-700 p-10 mb-16">
			<div class="w-4/5 flex flex-col items-start justify-center text-white">
				<h1 class="text-3xl">The Touhou Files</h1>
				<p class="text-xl">by Bloopre</p>
			</div>
		</header>
	);
};

export default Header;