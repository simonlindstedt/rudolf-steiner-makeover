import { registerBlockType } from "@wordpress/blocks";
import {
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from "@wordpress/block-editor";
import "./editor.scss";
import { ColorPalette, PanelBody } from "@wordpress/components";
import colors from "../../helpers/colors";

registerBlockType("create-block/text-image-block", {
	title: "Text Image Block",
	icon: "media-text",
	category: "common",

	attributes: {
		imageUrl: {
			type: "string",
			default: "",
		},
		imageId: {
			type: "number",
			default: 0,
		},
		displayType: {
			type: "string",
			default: "spotlight",
		},
		color: {
			style: "string",
			default: "#fefefe",
		},
	},

	edit: ({ attributes, setAttributes }) => {
		const ALLOWED_BLOCKS = ["core/heading", "core/paragraph"];
		// Attributes
		const { imageUrl, imageId, displayType, color } = attributes;

		// Functions
		const setImage = (value) => {
			setAttributes({ imageUrl: value.url, imageId: value.id });
		};

		const setDisplayType = (value) => {
			setAttributes({ displayType: value });
		};

		const setColor = (value) => {
			console.log(value);
			setAttributes({ color: value });
		};

		const uploadButton = (open) => {
			if (imageUrl) {
				return (
					<div>
						<img src={imageUrl} />
						<button onClick={open}>Choose image</button>
					</div>
				);
			}
			return <button onClick={open}>Choose image</button>;
		};

		return [
			<InspectorControls>
				<PanelBody title="Text Card Color" initialOpen={true}>
					<p>Select text card color</p>
					<ColorPalette colors={colors} value={color} onChange={setColor} />
				</PanelBody>
				<PanelBody title="Type">
					<p>Select type</p>
					<select
						value={displayType}
						onChange={(e) => {
							setDisplayType(e.target.value);
						}}
					>
						<option value="spotlight">Spotlight</option>
						<option value="left">Left</option>
						<option value="right">Right</option>
					</select>
				</PanelBody>
			</InspectorControls>,
			<div {...useBlockProps()}>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={setImage}
						value={imageId}
						render={({ open }) => uploadButton(open)}
					/>
				</MediaUploadCheck>
				<div
					style={{
						backgroundColor: color,
						width: "100%",
						minHeight: "200px",
						padding: "24px",
					}}
				>
					<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
				</div>
			</div>,
		];
	},
	save: ({ attributes }) => {
		const { imageUrl, displayType, color } = attributes;

		return (
			<div className={`text-image-block ${displayType}`}>
				{imageUrl && <img src={imageUrl} />}
				<div className="text" style={{ backgroundColor: color }}>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
});
