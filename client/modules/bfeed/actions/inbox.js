export default {
  query() {

    function selector() {
      return {workflow: "/tw-ui/0.inbox"}
    }

    return {
      name: 'inbox',
      connection: null,
      collection: 'taskspending',
      selector: selector,
      pubsort: {created: -1},
      subsort: {created: -1},
      limit: 1,
    }
  },
}

