export default {
  query() {

    function selector() {
      return {workflow: "/tw-ui/4.topcontextinbox"}
    }

    return {
      name: 'contextinbox',
      connection: null,
      collection: 'taskspending',
      selector: selector,
      pubsort: {created: -1},
      subsort: {created: -1},
      limit: 1,
    }
  },
}

