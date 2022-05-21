import { JSX } from "solid-js";

export interface IEntry {
	name: string,
	opinion: string,
}

export interface IEntryElement extends JSX.HTMLAttributes<HTMLDivElement>{
	name: string,
	opinion: string,
}