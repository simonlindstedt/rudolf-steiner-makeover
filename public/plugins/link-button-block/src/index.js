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
		size: {
			type: "string",
			default: "",
		},
	},

	edit: ({ attributes, setAttributes }) => {
		// Props
		const { url, title, color, size } = attributes;

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

		const setSize = (value) => {
			setAttributes({ size: value });
		};

		return [
			<InspectorControls>
				<PanelBody title="Background-color">
					<p>Select background color</p>
					<ColorPalette value={color} onChange={setColor}></ColorPalette>
				</PanelBody>
				<PanelBody>
					<p>Select size</p>
					<select value={size} onChange={(e) => setSize(e.target.value)}>
						<option value="">Normal</option>
						<option value="large">Large</option>
					</select>
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
		const { url, title, color, size } = attributes;
		return (
			<a
				href={url}
				style={{ backgroundColor: color }}
				className={`link-button ${size}`}
			>
				<span className="title">{title}</span>
			</a>
		);
	},
});
