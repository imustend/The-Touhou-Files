import { Component, For, onMount } from "solid-js";
import { IEntry } from "../interfaces/entry";
import Entry from "./Entry";

import * as list from "../assets/list.json"

const Entries: Component = (props) => {
 
	onMount(() => { 
		console.log(list);
	 });

	return (
		<>
			<For each={list.characters}>{(entry: IEntry) => 
				<Entry name={entry.name} opinion={entry.opinion}/>
			}</For>
		</>
	);
};

export default Entries;