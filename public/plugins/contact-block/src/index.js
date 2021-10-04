import { registerBlockType } from "@wordpress/blocks";
import { PlainText, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

registerBlockType("create-block/contact-block", {
	title: "Contact block",
	icon: "phone",
	category: "common",

	attributes: {
		title: {
			type: "string",
		},
		name: {
			type: "string",
		},
		phone: {
			type: "string",
		},
		email: {
			type: "string",
		},
	},

	edit: ({ attributes, setAttributes }) => {
		const { title, name, phone, email } = attributes;
		const setTitle = (value) => {
			setAttributes({ title: value });
		};
		const setName = (value) => {
			setAttributes({ name: value });
		};
		const setPhone = (value) => {
			setAttributes({ phone: value });
		};
		const setEmail = (value) => {
			setAttributes({ email: value });
		};

		return [
			<div {...useBlockProps()}>
				<PlainText
					value={title}
					placeholder="Title"
					onChange={setTitle}
					style={{
						fontSize: "24px",
						backgroundColor: "unset",
						width: "auto",
					}}
				></PlainText>
				<PlainText
					value={name}
					placeholder="Name"
					onChange={setName}
					style={{ fontSize: "18px" }}
				></PlainText>
				<PlainText
					value={phone}
					placeholder="Phone number"
					onChange={setPhone}
					style={{ fontSize: "18px" }}
				></PlainText>
				<PlainText
					value={email}
					placeholder="Email"
					onChange={setEmail}
					style={{ fontSize: "18px" }}
				></PlainText>
			</div>,
		];
	},
	save: ({ attributes }) => {
		const { title, name, phone, email } = attributes;

		return (
			<div className="contact-wrapper">
				<div className="contact-div">
					<h2>{title}</h2>
					<ul className="contact-list">
						<li className="contact-top">
							<img
								class="contact-icon"
								src="/themes/rudolf-steiner/assets/svg/person.svg"
							/>
							{name}
						</li>
						<li className="contact-top">
							<img
								class="contact-icon"
								src="/themes/rudolf-steiner/assets/svg/phone_iphone.svg"
							/>
							{phone}
						</li>
						<li>
							<img
								class="contact-icon"
								src="/themes/rudolf-steiner/assets/svg/mail_outline.svg"
							/>
							{email}
						</li>
					</ul>
				</div>
			</div>
		);
	},
});
