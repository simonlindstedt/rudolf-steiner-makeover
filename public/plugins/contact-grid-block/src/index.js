import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

registerBlockType("create-block/contact-grid-block", {
	title: "Contact Grid Block",
	icon: "grid-view",
	category: "common",

	edit: () => {
		const ALLOWED_BLOCKS = ["create-block/contact-block"];

		return (
			<div {...useBlockProps()}>
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</div>
		);
	},

	save: () => {
		return (
			<div className="contact-grid">
				<InnerBlocks.Content />
			</div>
		);
	},
});
