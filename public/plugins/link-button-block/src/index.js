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
		backgroundColor: {
			type: "string",
			default: "#8ed1fc",
		},
		titleBackgroundColor: {
			type: "string",
			default: "#25342e",
		},
		size: {
			type: "string",
			default: "small",
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
		const {
			url,
			title,
			backgroundColor,
			titleBackgroundColor,
			size,
			imageUrl,
			imageId,
		} = attributes;

		// Functions
		const setUrl = (value) => {
			setAttributes({ url: value });
		};

		const setTitle = (value) => {
			setAttributes({ title: value });
		};

		const setBackgroundColor = (value) => {
			setAttributes({ backgroundColor: value });
		};

		const setTitleBackgroundColor = (value) => {
			setAttributes({ titleBackgroundColor: value });
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
				<PanelBody title="Card Background Color" initialOpen={true}>
					<p>Select Card Background Color</p>
					<ColorPalette
						value={backgroundColor}
						onChange={setBackgroundColor}
						colors={colors}
					/>
				</PanelBody>
				<PanelBody title="Title Background Color">
					<p>Select Title Background Color</p>
					<ColorPalette
						value={titleBackgroundColor}
						onChange={setTitleBackgroundColor}
						colors={[
							{ color: "#25342e", name: "Main Dark Sea Green" },
							{ color: "#F3F7F6", name: "Main Mint White" },
						]}
					/>
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
						<option value="small">Small</option>
						<option value="medium">Medium</option>
						<option value="large">Large</option>
						<option value="single">Single</option>
					</select>
				</PanelBody>
			</InspectorControls>,
			<div {...useBlockProps()} style={{ backgroundColor: backgroundColor }}>
				<PlainText
					style={{
						backgroundColor: titleBackgroundColor,
						color: titleBackgroundColor === "#25342e" ? "white" : "black",
					}}
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
		const {
			url,
			title,
			backgroundColor,
			titleBackgroundColor,
			size,
			imageUrl,
		} = attributes;

		return (
			<a
				href={url}
				style={{
					backgroundColor: backgroundColor,
					backgroundImage: imageUrl ? `url(${imageUrl})` : "unset",
				}}
				className={`link-button ${size} ${imageUrl ? "background-image" : ""}`}
			>
				<span
					className="title"
					style={{
						backgroundColor: titleBackgroundColor,
						color: titleBackgroundColor === "#25342e" ? "white" : "black",
					}}
				>
					{title}
				</span>
			</a>
		);
	},
});
