import Image from '@tiptap/extension-image'

const FixedSizeImage = Image.extend({
  addAttributes() {
    return {
      ...Image.config.addAttributes(),
      width: {
        default: 500,
        renderHTML: attributes => ({
          width: attributes.width,
        }),
      },
      height: {
        default: 500,
        renderHTML: attributes => ({
          height: attributes.height,
        }),
      },
    }
  },
})

export default FixedSizeImage