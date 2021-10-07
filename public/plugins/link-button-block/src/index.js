import { registerBlockType } from "@wordpress/blocks";
import {
	useBlockProps,
	InspectorControls,
	ColorPalette,
	PlainText,
	MediaUploadCheck,
	MediaUpload,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import "./editor.scss";

import colors from "../../helpers/colors";

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
		imageUrl: {
			type: "string",
			default: "",
		},
		imageId: {
			type: "number",
			default: 0,
		},
	},

	edit: ({ attributes, setAttributes }) => {
		// Props
		const { url, title, color, size, imageUrl, imageId } = attributes;

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

		const setBackgroundImage = (value) => {
			setAttributes({ imageUrl: value.url, imageId: value.id });
		};

		const removeBackgroundImage = () => {
			setAttributes({ imageUrl: "", imageId: 0 });
		};

		const uploadButton = (open) => {
			if (imageUrl) {
				return (
					<div style={{ width: "100%" }}>
						<img src={imageUrl} />
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<button
								onClick={removeBackgroundImage}
								style={{
									backgroundColor: "red",
									color: "white",
									border: "none",
									cursor: "pointer",
									borderRadius: "4px",
								}}
							>
								Remove image
							</button>
							<button onClick={open}>Replace image</button>
						</div>
					</div>
				);
			} else {
				return <button onClick={open}>Add background image</button>;
			}
		};

		return [
			<InspectorControls>
				<PanelBody title="Background-color">
					<p>Select background color</p>
					<ColorPalette
						value={color}
						onChange={setColor}
						colors={colors}
					></ColorPalette>
				</PanelBody>
				<PanelBody title="Background-image" initialOpen={true}>
					<div className="editor-post-featured-image">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={setBackgroundImage}
								value={imageId}
								allowedTypes={["image"]}
								render={({ open }) => uploadButton(open)}
							/>
						</MediaUploadCheck>
					</div>
				</PanelBody>
				<PanelBody>
					<p>Select size</p>
					<select value={size} onChange={(e) => setSize(e.target.value)}>
						<option value="">Normal</option>
						<option value="large">Large</option>
						<option value="single">Single</option>
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
		const { url, title, color, size, imageUrl } = attributes;

		return (
			<a
				href={url}
				style={{
					backgroundColor: color,
					backgroundImage: imageUrl ? `url(${imageUrl})` : "unset",
				}}
				className={`link-button ${size} ${imageUrl ? "background-image" : ""}`}
			>
				<span className="title">{title}</span>
			</a>
		);
	},
});
