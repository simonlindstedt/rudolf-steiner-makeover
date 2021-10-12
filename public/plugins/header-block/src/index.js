import { registerBlockType } from "@wordpress/blocks";
import {
	InspectorControls,
	useBlockProps,
	ColorPalette,
	MediaUploadCheck,
	MediaUpload,
	InnerBlocks,
} from "@wordpress/block-editor";

import { PanelBody } from "@wordpress/components";

import colors from "../../helpers/colors";
import "./editor.scss";

registerBlockType("create-block/header-block", {
	title: "Header Block",
	icon: "carrot",
	category: "common",

	attributes: {
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
		const { backgroundColor, backgroundImageUrl, backgroundImageId } =
			attributes;

		const ALLOWED_BLOCKS = ["core/heading"];

		// Functions
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
						colors={colors}
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
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</div>,
		];
	},
	save: ({ attributes }) => {
		// Attributes
		const { backgroundColor, backgroundImageUrl } = attributes;

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
					<InnerBlocks.Content />
				</header>
				<button className="scroll-button">
					<svg
						width="64"
						height="64"
						viewBox="0 0 64 64"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect x="17" y="15" width="30" height="34" fill="white" />
						<path
							d="M0 32C0 40.4869 3.37142 48.6263 9.37258 54.6274C15.3737 60.6286 23.5131 64 32 64C40.4869 64 48.6263 60.6286 54.6274 54.6274C60.6286 48.6263 64 40.4869 64 32C64 23.5131 60.6286 15.3737 54.6274 9.37258C48.6263 3.37142 40.4869 0 32 0C23.5131 0 15.3737 3.37142 9.37258 9.37258C3.37142 15.3737 0 23.5131 0 32ZM30 18C30 17.4696 30.2107 16.9609 30.5858 16.5858C30.9609 16.2107 31.4696 16 32 16C32.5304 16 33.0391 16.2107 33.4142 16.5858C33.7893 16.9609 34 17.4696 34 18V41.172L42.584 32.584C42.77 32.398 42.9907 32.2505 43.2337 32.1499C43.4766 32.0493 43.737 31.9975 44 31.9975C44.263 31.9975 44.5234 32.0493 44.7663 32.1499C45.0093 32.2505 45.23 32.398 45.416 32.584C45.602 32.77 45.7495 32.9907 45.8501 33.2337C45.9507 33.4766 46.0025 33.737 46.0025 34C46.0025 34.263 45.9507 34.5234 45.8501 34.7663C45.7495 35.0093 45.602 35.23 45.416 35.416L33.416 47.416C33.2302 47.6023 33.0095 47.75 32.7665 47.8509C32.5236 47.9517 32.2631 48.0036 32 48.0036C31.7369 48.0036 31.4764 47.9517 31.2335 47.8509C30.9905 47.75 30.7698 47.6023 30.584 47.416L18.584 35.416C18.2085 35.0405 17.9975 34.5311 17.9975 34C17.9975 33.4689 18.2085 32.9595 18.584 32.584C18.9595 32.2085 19.4689 31.9975 20 31.9975C20.5311 31.9975 21.0405 32.2085 21.416 32.584L30 41.172V18Z"
							fill="black"
						/>
					</svg>
				</button>
			</>
		);
	},
});
