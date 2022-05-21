import { Component } from "solid-js";

const Video: Component = () => {
 
	return (
		<div class="w-4/5 flex flex-col items-start justify-center m-auto">
			<h2 class="text-3xl text-gray-700 mb-8">The Video</h2>

			<video muted={true} controls={true} loop={true} autoplay={true} class="w-4/5">
				<source src="https://cdn.discordapp.com/attachments/909796769800519711/977685190635835522/Seki_the_3rd.mp4" type="video/mp4"/>
			</video>
		</div>
	);
};

export default Video;