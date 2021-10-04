import { registerBlockType } from "@wordpress/blocks";
import {
	InspectorControls,
	PlainText,
	useBlockProps,
	ColorPalette,
	MediaUploadCheck,
	MediaUpload,
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
		backgroundImageUrl: {
			type: "string",
			attribute: "src",
		},
		backgroundImageId: {
			type: "number",
			default: 0,
		},
	},

	edit: ({ attributes, setAttributes }) => {
		// Attributes
		const {
			mainHeading,
			backgroundColor,
			backgroundImageUrl,
			backgroundImageId,
		} = attributes;

		// Functions
		const setMainHeader = (value) => {
			setAttributes({ mainHeading: value });
		};
		const setBackgroundColor = (value) => {
			setAttributes({ backgroundColor: value });
		};
		const setBackgroundImage = (value) => {
			setAttributes({
				backgroundImageUrl: value.url,
				backgroundImageId: value.id,
			});
		};
		const removeBackgroundImage = () => {
			setAttributes({
				backgroundImageUrl: "",
				backgroundImageId: 0,
			});
		};

		const uploadButton = (open, imageUrl) => {
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
				<PanelBody title="Background-color" initialOpen={true}>
					<p>Select background color</p>
					<ColorPalette
						value={backgroundColor}
						onChange={setBackgroundColor}
					></ColorPalette>
				</PanelBody>
				<PanelBody title="Background-image" initialOpen={true}>
					<div className="editor-post-featured-image">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={setBackgroundImage}
								value={backgroundImageId}
								allowedTypes={["image"]}
								render={({ open }) => uploadButton(open, backgroundImageUrl)}
							/>
						</MediaUploadCheck>
					</div>
				</PanelBody>
			</InspectorControls>,
			<div
				{...useBlockProps()}
				style={{
					backgroundColor: backgroundColor,
					backgroundImage: backgroundImageUrl
						? `url(${backgroundImageUrl})`
						: "none",
				}}
			>
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
		const { mainHeading, backgroundColor, backgroundImageUrl } = attributes;

		return (
			<>
				<header
					style={{
						backgroundColor: backgroundColor,
						backgroundImage: backgroundImageUrl
							? `url(${backgroundImageUrl})`
							: "none",
					}}
				>
					<h2>{mainHeading}</h2>
				</header>
				<button className="scroll-button">↓</button>
			</>
		);
	},
});
