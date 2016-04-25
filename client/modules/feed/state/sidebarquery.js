const sidebarquery = (context, actions) => ({
  queryid: 'sidebarquery',
  actions: actions.feed,
  context: () => context,
})

export default sidebarquery
