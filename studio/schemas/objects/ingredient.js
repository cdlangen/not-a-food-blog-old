export default {
  name: 'ingredient',
  type: 'object',
  title: 'Ingredient',
  fields: [
    {
      title: 'Quantity',
      name: 'quantity',
      type: 'number'
    },
    {
      title: 'Unit',
      name: 'unit',
      type: 'string'
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    }
  ],
  preview: {
    select: {
      quantity: 'quantity',
      unit: 'unit',
      name: 'name'
    },
    prepare({ quantity, unit, name }) {
      return {
        title: quantity + ' ' + unit + ' ' + name
      }
    }
  }
}
