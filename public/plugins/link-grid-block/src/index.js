import { registerBlockType } from "@wordpress/blocks";
import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from "@wordpress/block-editor";
import "./editor.scss";
import { PanelBody } from "@wordpress/components";

registerBlockType("create-block/link-grid-block", {
	title: "Link Grid Block",
	icon: "grid-view",
	category: "common",

	attributes: {
		gridType: {
			type: "string",
			default: "complex",
		},
	},

	edit: ({ attributes, setAttributes }) => {
		// Attributes
		const { gridType } = attributes;
		const ALLOWED_BLOCKS = ["create-block/link-button-block"];

		// Functions
		const setGridType = (value) => {
			setAttributes({ gridType: value });
		};

		return [
			<InspectorControls>
				<PanelBody title="Grid Type" initialOpen={true}>
					<p>Select Grid Type</p>
					<select
						value={gridType}
						onChange={(e) => {
							setGridType(e.target.value);
						}}
					>
						<option value="complex">Complex</option>
						<option value="normal">Normal</option>
					</select>
				</PanelBody>
			</InspectorControls>,
			<div {...useBlockProps()}>
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</div>,
		];
	},

	save: ({ attributes }) => {
		// Attributes
		const { gridType } = attributes;
		return (
			<div className={`link-grid ${gridType}`}>
				<InnerBlocks.Content />
			</div>
		);
	},
});
