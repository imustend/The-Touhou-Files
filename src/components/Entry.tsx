import { Component, PropsWithChildren, splitProps } from "solid-js";
import { IEntryElement } from "../interfaces/entry";

const Entry: Component<IEntryElement> = (props) => {
 
	const [, rest] = splitProps(props, ["name", "opinion"]);

	return (
		<div {...rest}>
			<h1>{props.name}</h1><br/>
			<p>{props.opinion}</p><br/>
		</div>
	);
};

export default Entry;