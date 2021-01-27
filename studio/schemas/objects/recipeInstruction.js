export default {
  name: 'recipeInstruction',
  type: 'object',
  title: 'Instruction',
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'string'
    }
  ],
  preview: {
    select: {
      text: 'text'
    },
    prepare({ text }) {
      return {
        title: text
      }
    }
  }
}
