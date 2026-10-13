export default {
  config: {
    // Your existing admin configurations...
  },
  register(app) {
    app.customFields.register({
      name: 'inline-svg',
      type: 'text', // Under the hood, it stores standard string data
      intlLabel: {
        id: 'custom.inline-svg.label',
        defaultMessage: 'Editable SVG Text',
      },
      intlDescription: {
        id: 'custom.inline-svg.description',
        defaultMessage: 'Pasted raw SVG code with live preview',
      },
      components: {
        Input: async () => import('../extensions/SVGPreview'),
      },
    });
  },
};
