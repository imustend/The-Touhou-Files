import { Component, onMount, splitProps } from "solid-js";
import { IEntryElement } from "../interfaces/entry";
import { Show } from "solid-js";

const Entry: Component<IEntryElement> = (props) => {

	const [, rest] = splitProps(props, ["name", "opinion"]);

	let isVideo:boolean = false;
	let isImage:boolean = false;
	let isLink:boolean = false;

	onMount(() => {
		document.getElementsByTagName('video')[0].volume = 0.5;
	});
	
	return (
		<>
			<Show when={props.name !== "Sariel"}>
				<div {...rest} class="mb-8">
					<h1 class="text-xl text-gray-700 mb-1" id = {props.name}>{props.name}</h1>

					<Show when={props.opinion.includes(".mp4")}>
						<video muted={false} controls={true} class="w-4/5">
                    		<source src={ props.opinion } type="video/mp4" />
                		</video>
					</Show>
					<Show when={props.opinion.includes(".jpg") || props.opinion.includes(".png")}>
						<img src={ props.opinion } alt={ props.name } class="w-3/5 h-auto"/>
					</Show>
					<Show when={props.opinion.includes("https") && !props.opinion.includes(".png") && !props.opinion.includes(".jpg") && !props.opinion.includes(".mp4")}>
						<a href={props.opinion} class="underline decoration-solid decoration-slate-700 text-slate-700 hover:decoration-slate-500 hover:text-slate-500 break-words">{props.opinion}</a>
					</Show>

					<Show when={!props.opinion.includes("https") && !props.opinion.includes(".png") && !props.opinion.includes(".jpg") && !props.opinion.includes(".mp4")}>
						<p>{props.opinion}</p>
					</Show>
					
				</div>
			</Show>
			<Show when={props.name === "Sariel"}>
				<div {...rest} class="-z-50 mb-8">
					<h1 class="text-xl text-gray-700" id = {props.name}>{props.name}</h1>
					<p class="opacity-50">{props.opinion}</p>
					
				</div>
			</Show>
		</>
	);
};

export default Entry;