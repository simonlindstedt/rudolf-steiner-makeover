import { registerBlockType } from "@wordpress/blocks";
import {
	useBlockProps,
	InspectorControls,
	ColorPalette,
	PlainText,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import "./editor.scss";

registerBlockType("create-block/link-button-block", {
	title: "Link button",
	icon: "button",
	category: "common",

	attributes: {
		title: {
			type: "string",
		},
		url: {
			type: "string",
			attribute: "href",
		},
		color: {
			type: "string",
			default: "#8ed1fc",
		},
	},

	edit: ({ attributes, setAttributes }) => {
		// Props
		const { url, title, color } = attributes;

		// Functions
		const setUrl = (value) => {
			setAttributes({ url: value });
		};

		const setTitle = (value) => {
			setAttributes({ title: value });
		};

		const setColor = (value) => {
			setAttributes({ color: value });
		};

		return [
			<InspectorControls>
				<PanelBody title="Background-color">
					<p>Select background color</p>
					<ColorPalette value={color} onChange={setColor}></ColorPalette>
				</PanelBody>
			</InspectorControls>,
			<div {...useBlockProps()} style={{ backgroundColor: color }}>
				<PlainText
					value={title}
					placeholder="Title"
					onChange={setTitle}
					className="link-title"
				/>
				<PlainText
					value={url}
					placeholder="Link"
					onChange={setUrl}
					className="link-url"
				/>
			</div>,
		];
	},
	save: ({ attributes }) => {
		const { url, title, color } = attributes;
		return (
			<a href={url} style={{ backgroundColor: color }} className="link-button">
				<span className="title">{title}</span>
			</a>
		);
	},
});
