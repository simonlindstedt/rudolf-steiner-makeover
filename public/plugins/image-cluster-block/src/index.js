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
		secondImageUrl: {
			attribute: "src",
		},
		secondImageId: {
			type: "number",
			default: 0,
		},
		thirdImageUrl: {
			attribute: "src",
		},
		thirdImageId: {
			type: "number",
			default: 0,
		},
	},

	edit: ({ attributes, setAttributes }) => {
		const {
			firstImageUrl,
			secondImageUrl,
			thirdImageUrl,
			firstImageId,
			secondImageId,
			thirdImageId,
		} = attributes;

		const firstSelect = (media) => {
			setAttributes({ firstImageUrl: media.url, firstImageId: media.id });
		};
		const secondSelect = (media) => {
			setAttributes({ secondImageUrl: media.url, secondImageId: media.id });
		};
		const thirdSelect = (media) => {
			setAttributes({ thirdImageUrl: media.url, thirdImageId: media.id });
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
					<MediaUpload
						onSelect={thirdSelect}
						value={thirdImageId}
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
