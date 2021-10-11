import { registerBlockType } from "@wordpress/blocks";
import {
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	PlainText,
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
			default: "black",
		},
		title: {
			type: "string",
		},
	},

	edit: ({ attributes, setAttributes }) => {
		const ALLOWED_BLOCKS = ["core/paragraph"];
		// Attributes
		const { imageUrl, imageId, displayType, color, title } = attributes;

		// Functions
		const setImage = (value) => {
			setAttributes({ imageUrl: value.url, imageId: value.id });
		};

		const setDisplayType = (value) => {
			setAttributes({ displayType: value });
		};

		const setColor = (value) => {
			setAttributes({ color: value });
		};
		const setTitle = (value) => {
			setAttributes({ title: value });
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
				<PanelBody title="Title background color" initialOpen={true}>
					<p>Select title background color</p>
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
				<PlainText
					value={title}
					onChange={setTitle}
					placeholder="title"
					style={{ backgroundColor: color }}
				/>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={setImage}
						value={imageId}
						render={({ open }) => uploadButton(open)}
					/>
				</MediaUploadCheck>
				<div
					style={{
						backgroundColor: "white",
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
		const { imageUrl, displayType, color, title } = attributes;

		return (
			<div className={`text-image-block ${displayType}`}>
				<h2 style={{ backgroundColor: color }}>{title}</h2>
				{imageUrl && <img src={imageUrl} />}
				<div className="text">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
});
