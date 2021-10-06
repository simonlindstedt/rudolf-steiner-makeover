import { registerBlockType } from "@wordpress/blocks";
import {
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import "./editor.scss";
import { PanelBody } from "@wordpress/components";

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
		heading: {
			type: "string",
			attribute: "h3",
			source: "html",
		},
		body: {
			type: "string",
			attribute: "p",
			source: "html",
		},
		displayType: {
			type: "string",
			default: "spotlight",
		},
	},

	edit: ({ attributes, setAttributes }) => {
		const ALLOWED_BLOCKS = ["core/heading", "core/paragraph"];
		// Attributes
		const { imageUrl, imageId, heading, body, displayType } = attributes;

		// Functions

		const setHeading = (value) => {
			setAttributes({ heading: value });
		};
		const setBody = (value) => {
			setAttributes({ body: value });
		};
		const setImage = (value) => {
			setAttributes({ imageUrl: value.url, imageId: value.id });
		};
		const setDisplayType = (value) => {
			setAttributes({ displayType: value });
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
				{/* <RichText
					tagName="h3"
					value={heading}
					placeholder="heading"
					onChange={setHeading}
					style={{
						fontSize: "24px",
						backgroundColor: "unset",
						width: "auto",
					}}
				/>
				<RichText
					tagName="p"
					value={body}
					placeholder="body"
					onChange={setBody}
					style={{
						fontSize: "16px",
						backgroundColor: "unset",
						width: "auto",
					}}
				/> */}
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</div>,
		];
	},
	save: ({ attributes }) => {
		const { imageUrl, heading, body, displayType } = attributes;

		return (
			<div className={`text-image-block ${displayType}`}>
				{imageUrl && <img src={imageUrl} />}
				<div className="text">
					{/* <h3>{heading}</h3>
					<p>{body}</p> */}
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
});
