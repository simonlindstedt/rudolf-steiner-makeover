import "./editor.scss";
import "./style.scss";

const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType("cgb/simple-edit", {
  title: "Simple edit block",
  icon: "shield",
  category: "common",

  attributes: {
    heading: {
      type: "string",
      source: "html",
      selector: "h2",
    },
    body: {
      type: "string",
      source: "html",
      selector: "p",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { title, body } = attributes;

    const setHeading = (content) => {
      setAttributes({ heading: content });
    };

    const setBody = (content) => {
      setAttributes({ body: content });
    };

    return (
      <div className="simple-editor-wrapper">
        <RichText
          tagName="h2"
          placholder="Heading..."
          value={title}
          onChange={setHeading}
        />
        <RichText
          tagName="p"
          placholder="Body text..."
          value={body}
          onChange={setBody}
        />
      </div>
    );
  },

  save: ({ attributes }) => {},
});
