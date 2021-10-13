import { registerBlockType } from "@wordpress/blocks";
import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from "@wordpress/block-editor";
import "./editor.scss";

registerBlockType("create-block/image-cluster-block", {
	title: "Image cluster block",
	icon: "grid-view",
	category: "custom",

	attributes: {
		firstImageUrl: {
			attribute: "src",
		},
		firstImageId: {
			type: "number",
			default: 0,
		},
		firstImageAlt: {
			type: "string",
		},
		secondImageUrl: {
			attribute: "src",
		},
		secondImageId: {
			type: "number",
			default: 0,
		},
		secondImageAlt: {
			type: "string",
		},
	},

	edit: ({ attributes, setAttributes }) => {
		const { firstImageUrl, secondImageUrl, firstImageId, secondImageId } =
			attributes;

		const firstSelect = (media) => {
			setAttributes({
				firstImageUrl: media.url,
				firstImageId: media.id,
				firstImageAlt: media.alt,
			});
		};
		const secondSelect = (media) => {
			setAttributes({
				secondImageUrl: media.url,
				secondImageId: media.id,
				secondImageAlt: media.alt,
			});
		};

		const uploadButton = (open, imgUrl) => {
			if (imgUrl) {
				return (
					<div>
						<img src={imgUrl}></img>
						<button onClick={open}>Choose Image</button>
					</div>
				);
			} else {
				return <button onClick={open}>Choose Image</button>;
			}
		};

		return [
			<div {...useBlockProps()}>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={firstSelect}
						value={firstImageId}
						render={({ open }) => uploadButton(open, firstImageUrl)}
					/>
					<MediaUpload
						onSelect={secondSelect}
						value={secondImageId}
						render={({ open }) => uploadButton(open, secondImageUrl)}
					/>
				</MediaUploadCheck>
			</div>,
		];
	},
	save: ({ attributes }) => {
		const { firstImageUrl, secondImageUrl, firstImageAlt, secondImageAlt } =
			attributes;
		return [
			<div className="image-cluster">
				<img src={firstImageUrl} alt={firstImageAlt} className="large" />
				<img src={secondImageUrl} alt={secondImageAlt} className="medium" />
			</div>,
		];
	},
});
