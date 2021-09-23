/* alert("this is a test"); */

wp.blocks.registerBlockType("cgb/block-gildas-block", {
  title: "Gildas Block",
  icon: "smiley",
  category: "common",
  attributes: {
    content: { type: "string" },
  },

  edit: function (props) {
    function updateContent(event) {
      props.setAttributes({ content: event.target.value });
    }
    return wp.element.createElement(
      "div",
      null,
      wp.element.createElement("h3", null, "test block"),
      wp.element.createElement("textarea", {
        type: "text",
        value: props.attributes.content,
        onChange: updateContent,
      })
    );
  },

  save: function (props) {
    return wp.element.createElement("h1", null, props.attributes.content);
  },
});

/* wp.blocks.registerBlockType("cgb/block-gildas-block", {
  title: "Gildas Block",
  icon: "smiley",
  category: "common",
  attributes: {
    heading: { type: "string" },
    content: { type: "string" },
  },

  edit: function (props) {
    function updateHeading(event) {
      props.setAttributes({ heading: event.target.value });
    }
    function updateContent(event) {
      props.setAttributes({ content: event.target.value });
    }
    return wp.element.createElement(
      "div",
      null,
      wp.element.createElement("input", {
        type: "text",
        value: props.attributes.heading,
        onChange: updateHeading,
      }),
      wp.element.createElement("textarea", {
        type: "text",
        value: props.attributes.content,
        onChange: updateContent,
      })
    );
  },

  save: function (props) {
    return (
      wp.element.createElement("h1", null, props.attributes.heading),
      wp.element.createElement("p", null, props.attributes.content)
    );
  },
}); */
