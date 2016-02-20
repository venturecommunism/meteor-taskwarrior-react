import {tasks} from '/lib/collections';
const Model = Astro.Class({
  name: 'task',
  collection: tasks,
  fields: {
    description : 'string',
    type : 'string',
    // permissions: {
    //   type: 'array',
    //   default: function() {
    //     return [];
    //   }
    // },
    // 'phones': {
    //   type: 'array',
    //   nested: 'Phone',
    //   default: function() {
    //     return [];
    //   }
    // },
    // ownerId: 'string',
    // ownerNice: 'string',
  },

  // behaviors: {
  //   timestamp: {
  //     hasCreatedField: true,
  //     createdFieldName: 'createdAt',
  //     hasUpdatedField: true,
  //     updatedFieldName: 'updatedAt'
  //   },
  //   slug: {
  //     fieldName: 'name',
  //     methodName: null,
  //     slugFieldName: 'slug',
  //     canUpdate: true,
  //     unique: true,
  //     separator: '-'
  //   },
  // },

});

export default Model;
