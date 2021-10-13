import { registerBlockType } from "@wordpress/blocks";
import {
	InspectorControls,
	PlainText,
	useBlockProps,
	ColorPalette,
	InnerBlocks,
} from "@wordpress/block-editor";

import { PanelBody } from "@wordpress/components";

import "./editor.scss";
import colors from "../../helpers/colors";

registerBlockType("create-block/curved-block", {
	title: "Curved Block",
	icon: "block-default",
	category: "common",

	attributes: {
		title: {
			type: "string",
		},
		backgroundColor: {
			type: "string",
		},
		id: {
			type: "string",
		},
	},

	edit: ({ attributes, setAttributes }) => {
		// Attributes
		const { title, backgroundColor } = attributes;
		const ALLOWED_BLOCKS = [
			"core/heading",
			"core/paragraph",
			"create-block/image-cluster-block",
			"create-block/link-grid-block",
			"create-block/link-button-block",
			"create-block/image-text-block",
			"create-block/single-image-block",
			"create-block/contact-grid-block",
			"create-block/contact-block",
		];

		// Functions
		const setTitle = (value) => {
			setAttributes({ title: value });
			setId(value);
		};
		const setBackgroundColor = (value) => {
			setAttributes({ backgroundColor: value });
		};

		const setId = (value) => {
			value = value.replaceAll(/([å])/g, "a");
			value = value.replaceAll(/([ä])/g, "a");
			value = value.replaceAll(/([ö])/g, "o");
			setAttributes({ id: value });
		};

		return [
			<InspectorControls>
				<PanelBody title="Background-color">
					<p>Select background color</p>
					<ColorPalette
						colors={colors}
						value={backgroundColor}
						onChange={setBackgroundColor}
					></ColorPalette>
				</PanelBody>
			</InspectorControls>,
			<div {...useBlockProps()} style={{ backgroundColor: backgroundColor }}>
				<PlainText
					value={title}
					placeholder="Heading"
					onChange={setTitle}
					className="title"
					style={{
						fontSize: "24px",
						backgroundColor: "unset",
						width: "auto",
					}}
				/>
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</div>,
		];
	},
	save: ({ attributes }) => {
		// Attributes
		const { title, backgroundColor, id } = attributes;
		return (
			<div className="curved-wrapper" id={id}>
				<span className="top" style={{ backgroundColor: backgroundColor }} />
				<div
					className="curved-block"
					style={{ backgroundColor: backgroundColor }}
				>
					<h2 className="sticky-title">{title}</h2>
					<div className="content">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		);
	},
});
