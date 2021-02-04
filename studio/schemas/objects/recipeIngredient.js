export default {
  name: 'recipeIngredient',
  type: 'object',
  title: 'Ingredient',
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
