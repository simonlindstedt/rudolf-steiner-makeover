import { registerBlockType } from "@wordpress/blocks";
import {
	InspectorControls,
	PlainText,
	useBlockProps,
	ColorPalette,
} from "@wordpress/block-editor";

import { PanelBody } from "@wordpress/components";

import "./editor.scss";

registerBlockType("create-block/header-block", {
	title: "Header Block",
	icon: "carrot",
	category: "common",

	attributes: {
		mainHeading: {
			type: "string",
		},
		backgroundColor: {
			type: "string",
		},
	},

	edit: ({ attributes, setAttributes }) => {
		// Attributes
		const { mainHeading, backgroundColor } = attributes;

		// Functions
		const setMainHeader = (value) => {
			setAttributes({ mainHeading: value });
		};
		const setBackgroundColor = (value) => {
			setAttributes({ backgroundColor: value });
		};

		return [
			<InspectorControls>
				<PanelBody title="Background-color">
					<p>Select background color</p>
					<ColorPalette
						value={backgroundColor}
						onChange={setBackgroundColor}
					></ColorPalette>
				</PanelBody>
			</InspectorControls>,
			<div {...useBlockProps()} style={{ backgroundColor: backgroundColor }}>
				<PlainText
					value={mainHeading}
					placeholder="Heading"
					onChange={setMainHeader}
					style={{
						fontSize: "24px",
						backgroundColor: "unset",
						width: "auto",
					}}
				/>
			</div>,
		];
	},
	save: ({ attributes }) => {
		// Attributes
		const { mainHeading, backgroundColor } = attributes;

		return (
			<>
				<header style={{ backgroundColor: backgroundColor }}>
					<h2>{mainHeading}</h2>
				</header>
				<button className="scroll-button">↓</button>
			</>
		);
	},
});
