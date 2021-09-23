import "./editor.scss";
import "./style.scss";

const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType("custom/block-heading-block", {
  title: "Heading block",
  icon: "shield",
  category: "common",

  attributes: {
    heading: {
      type: "string",
    },
    body: {
      type: "string",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { heading, body } = attributes;

    const setHeadingText = (content) => {
      setAttributes({ heading: content });
    };
    const setBodyText = (content) => {
      setAttributes({ body: content });
    };

    return (
      <div class="main-header">
        <RichText
          tagName="h1"
          value={heading}
          onChange={setHeadingText}
          placeholder="Heading"
        />
        <RichText
          tagName="p"
          value={body}
          onChange={setBodyText}
          placeholder="Body text"
        />
      </div>
    );
  },
  save: ({ attributes }) => {
    const { heading, body } = attributes;
    return (
      <header class="main-header">
        <h1>{heading}</h1>
        <p>{body}</p>
      </header>
    );
  },
});
