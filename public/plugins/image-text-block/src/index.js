import {
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	PlainText,
	useBlockProps,
} from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { ColorPalette, PanelBody } from "@wordpress/components";
import colors from "../../helpers/colors";
import "./editor.scss";
registerBlockType("create-block/image-text-block", {
	title: "Image with text block",
	icon: "cover-image",
	category: "common",

	attributes: {
		title: {
			type: "string",
		},
		imageUrl: {
			type: "string",
			default: "",
		},
		imageId: {
			type: "number",
			default: 0,
		},
		color: {
			type: "string",
			default: "#F3F7F6",
		},
		cardType: {
			type: "string",
			default: "spotlight",
		},
		icon: {
			type: "string",
		},
	},

	edit: ({ attributes, setAttributes }) => {
		// Attributes
		const { title, imageUrl, imageId, color, cardType, icon } = attributes;
		const ALLOWED_BLOCKS = ["core/paragraph"];

		// Functions

		const setTitle = (value) => {
			setAttributes({ title: value });
		};
		const setImage = (value) => {
			setAttributes({ imageUrl: value.url, imageId: value.id });
		};

		const setColor = (value) => {
			setAttributes({ color: value });
		};

		const setCardType = (value) => {
			setAttributes({ cardType: value });
		};

		const setIcon = (value) => {
			setAttributes({ icon: value });
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

		const iconOption = () => {
			if (cardType === "spotlight") {
				return;
			}
			return (
				<PlainText
					value={icon}
					onChange={setIcon}
					placeholder="0"
					style={{
						backgroundColor: color,
						width: "64px",
						height: "64px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				/>
			);
		};

		return [
			<InspectorControls>
				<PanelBody title="Card color" initialOpen={true}>
					<p>Set card color </p>
					<ColorPalette colors={colors} value={color} onChange={setColor} />
				</PanelBody>
				<PanelBody title="Type">
					<p>Select type</p>
					<select
						value={cardType}
						onChange={(e) => {
							setCardType(e.target.value);
						}}
					>
						<option value="spotlight">Spotlight</option>
						<option value="list">List</option>
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
				{iconOption()}
				<PlainText
					style={{ backgroundColor: color }}
					value={title}
					onChange={setTitle}
					placeholder="title"
					style={{ backgroundColor: color }}
				/>
				<div className="text-content">
					<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
				</div>
			</div>,
		];
	},
	save: ({ attributes }) => {
		// Attributes
		const { title, imageUrl, color, cardType, icon } = attributes;

		return (
			<div className={`image-text ${cardType}`}>
				<div className="decoration-wrapper">
					{icon && (
						<span style={{ backgroundColor: color }} className="round">
							{icon}
						</span>
					)}
					<h2 style={{ backgroundColor: color }}>{title}</h2>
					<span className="line" style={{ backgroundColor: color }} />
				</div>
				<div className="image-text-wrapper">
					<div className="left">
						<span className="line" style={{ backgroundColor: color }} />
					</div>
					<div className="right">
						<img src={imageUrl} />
						<div className="text-content">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			</div>
		);
	},
});
