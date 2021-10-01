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
		firstImageAlt: {
			type: "string",
			attribute: "src",
		},
		secondImageUrl: {
			attribute: "src",
		},
		secondImageAlt: {
			type: "string",
			attribute: "alt",
		},
		thirdImageUrl: {
			attribute: "src",
		},
		thirdImageAlt: {
			type: "string",
			attribute: "alt",
		},
	},

	edit: ({ attributes, setAttributes }) => {
		const { firstImageUrl, secondImageUrl, thirdImageUrl, imageID } =
			attributes;

		const firstSelect = (media) => {
			setAttributes({ firstImageUrl: media.url });
		};
		const secondSelect = (media) => {
			setAttributes({ secondImageUrl: media.url });
		};
		const thirdSelect = (media) => {
			setAttributes({ thirdImageUrl: media.url });
		};

		const uploadButton = (open, imgUrl) => {
			if (imgUrl) {
				return (
					<div>
						<img src={imgUrl}></img>
						<button onClick={open}>open</button>
					</div>
				);
			} else {
				return <button onClick={open}>open</button>;
			}
		};

		return [
			<div {...useBlockProps()}>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={firstSelect}
						value={imageID}
						render={({ open }) => uploadButton(open, firstImageUrl)}
					/>
					<MediaUpload
						onSelect={secondSelect}
						value={imageID}
						render={({ open }) => uploadButton(open, secondImageUrl)}
					/>
					<MediaUpload
						onSelect={thirdSelect}
						value={imageID}
						render={({ open }) => uploadButton(open, thirdImageUrl)}
					/>
				</MediaUploadCheck>
			</div>,
		];
	},
	save: ({ attributes }) => {
		const { firstImageUrl, secondImageUrl, thirdImageUrl } = attributes;
		return [
			<div className="image-cluster">
				<img src={firstImageUrl} />
				<img src={secondImageUrl} />
				<img src={thirdImageUrl} />
			</div>,
		];
	},
});
