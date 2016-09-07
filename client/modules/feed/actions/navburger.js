export default {
  buttontext() {
    return "Navbar"
  },
  buttonpress({context, FlowRouter}) {
    var visible = FlowRouter.current().queryParams.navbar
    if (!visible) {
      FlowRouter.setQueryParams({navbar: "visible"})
    } else {
      FlowRouter.setQueryParams({navbar: null})
    }
    //sweetAlert("Load more", sublimit ? sublimit : "No sublimit")
  },
}

