import { registerBlockType } from "@wordpress/blocks";
import {
  RichText,
  InspectorControls,
  ColorPalette,
} from "@wordpress/block-editor";

import { PanelBody } from "@wordpress/components";

import "./editor.scss";
import "./style.scss";

registerBlockType("create-block/header-block", {
  title: "Header Block",
  icon: "shield",
  category: "common",

  attributes: {
    headingText: {
      type: "string",
      source: "html",
      selector: "h2",
    },
    bodyText: {
      type: "string",
      source: "html",
      selector: "p",
    },
    backgroundColor: {
      type: "string",
      default: "white",
    },
    headingColor: {
      type: "string",
      default: "black",
    },
    bodyColor: {
      type: "string",
      default: "black",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { headingText, bodyText, backgroundColor, headingColor, bodyColor } =
      attributes;

    const setHeadingText = (p) => {
      setAttributes({ headingText: p });
    };
    const setBodyText = (p) => {
      setAttributes({ bodyText: p });
    };
    const setBackgroundColor = (p) => {
      setAttributes({ backgroundColor: p });
    };

    const setHeadingColor = (p) => {
      setAttributes({ headingColor: p });
    };

    const setBodyColor = (p) => {
      setAttributes({ bodyColor: p });
    };

    return [
      <InspectorControls>
        <PanelBody title="Background Color">
          <p>Select a background color for your block</p>
          <ColorPalette value={backgroundColor} onChange={setBackgroundColor} />
        </PanelBody>
        <PanelBody title="Heading text color">
          <p>Select a background color for your block</p>
          <ColorPalette value={headingColor} onChange={setHeadingColor} />
        </PanelBody>
        <PanelBody title="Body text color">
          <p>Select a background color for your block</p>
          <ColorPalette value={bodyColor} onChange={setBodyColor} />
        </PanelBody>
      </InspectorControls>,
      <div style={{ backgroundColor: backgroundColor }} className="main-header">
        <RichText
          tagName="h2"
          value={headingText}
          onChange={setHeadingText}
          placeholder="Heading"
          style={{ color: headingColor }}
        />
        <RichText
          tagName="p"
          value={bodyText}
          onChange={setBodyText}
          placeholder="Body text"
          style={{ color: bodyColor }}
        />
      </div>,
    ];
  },

  save: ({ attributes }) => {
    const { headingText, bodyText, backgroundColor, headingColor, bodyColor } =
      attributes;
    return (
      <header
        style={{ backgroundColor: backgroundColor }}
        className="main-header"
      >
        <h2 style={{ color: headingColor }}>{headingText}</h2>
        <p style={{ color: bodyColor }}>{bodyText}</p>
      </header>
    );
  },
});
