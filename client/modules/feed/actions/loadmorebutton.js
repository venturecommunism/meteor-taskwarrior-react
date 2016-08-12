export default {
  buttontext() {
    return "Load More"
  },
  buttonpress({context, FlowRouter}) {
    var sublimit = FlowRouter.current().queryParams.sublimit
    if (!sublimit) {
      FlowRouter.setQueryParams({sublimit: 3})
    } else {
      var sublimit = parseInt(sublimit) + 3
      FlowRouter.setQueryParams({sublimit: sublimit})
    }
    //sweetAlert("Load more", sublimit ? sublimit : "No sublimit")
  },
}

