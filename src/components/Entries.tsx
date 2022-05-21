import { Component, For, onMount } from "solid-js";
import { IEntry } from "../interfaces/entry";
import Entry from "./Entry";

import * as list from "../assets/list.json"

const Entries: Component = (props) => {
 
	onMount(() => { 
		console.log(list.characters);
	 });

	return (
		<div class="flex flex-col items-start w-4/5 m-auto overflow-x-hidden">

			<h2 class="text-3xl text-gray-700 mb-8">Entires</h2>

			<For each={list.characters}>{(entry: IEntry) => 
				<Entry name={entry.name} opinion={entry.opinion}/>
			}</For>
		</div>
	);
};

export default Entries;