import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

registerBlockType("create-block/link-grid-block", {
	title: "Link Grid Block",
	icon: "grid-view",
	category: "common",

	edit: () => {
		const ALLOWED_BLOCKS = ["create-block/link-button-block"];

		return (
			<div {...useBlockProps()}>
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</div>
		);
	},

	save: () => {
		return (
			<div className="link-grid">
				<InnerBlocks.Content />
			</div>
		);
	},
});
