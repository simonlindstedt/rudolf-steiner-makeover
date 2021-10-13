import { registerBlockType } from "@wordpress/blocks";
import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from "@wordpress/block-editor";

import "./editor.scss";

registerBlockType("create-block/single-image-block", {
	title: "Single Image Block",
	icon: "cover-image",
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
		imageAlt: {
			type: "string",
		},
	},

	edit: ({ attributes, setAttributes }) => {
		// Attributes
		const { imageUrl, imageId } = attributes;

		// Functions
		const setImage = (value) => {
			setAttributes({
				imageUrl: value.url,
				imageId: value.id,
				imageAlt: value.alt,
			});
		};

		const uploadButton = (open) => {
			if (imageUrl) {
				return (
					<div>
						<img src={imageUrl} />
						<button onClick={open}>Choose Image</button>
					</div>
				);
			}
			return <button onClick={open}>Choose Image</button>;
		};

		return (
			<div {...useBlockProps()}>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={setImage}
						value={imageId}
						render={({ open }) => uploadButton(open)}
					/>
				</MediaUploadCheck>
			</div>
		);
	},
	save: ({ attributes }) => {
		// Attributes
		const { imageUrl, imageAlt } = attributes;

		return <img className="single-image" src={imageUrl} alt={imageAlt} />;
	},
});
