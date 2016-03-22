import {tasks, TaskComments} from '/lib/collections'
import {Meteor} from 'meteor/meteor';

const FeedDomain = {
  // these are pulling from the Minimongo cache, only the subscription can
  // fetch data from the server

  getAllFeedTasks() {
    return tasks.find({}, {sort: {created: -1}}).fetch();
  },

  getTaskCommentIds() {
    return tasks.find({}, {fields: {_id: 1}}).map(doc => doc._id);
  },

  getTaskCommentsFromTaskId(docId) {
    return TaskComments.find({task: docId}, {sort: {created: -1}}).fetch();
  },

  // this might go in a TaskCommentsDomain but since we only have 1 method...
  handleCreateTaskComment(data) {
    Meteor.call('TaskComment.create', data);
  },

  handleIncrementTaskLimit(amount) {
    // TODO
    console.log('[FeedDomain.incrementTaskLimit]', amount);
  },

  // should params go in a RouteStore or ParamStore? perhaps overkill

  handleIncrementStepParam() {
    var currentStep = FlowRouter.getQueryParam('step') || 0;
    var nextStep = parseInt(currentStep) + 1;
    FlowRouter.setQueryParams({ step: nextStep });
  },

  handleFilterAllProjects() {
    var currentState = FlowRouter.getQueryParam('type')
    if (currentState != 'project') {
      FlowRouter.setQueryParams({ type: 'project' })
    } else {
      FlowRouter.setQueryParams({ type: null })
    }
  },

  handleFilterAllContexts() {
    var currentState = FlowRouter.getQueryParam('type')
    if (currentState != 'context') {
      FlowRouter.setQueryParams({ type: 'context' })
    } else {
      FlowRouter.setQueryParams({ type: null })
    }
  },

  handleFilterByProject(e) {
    var currentState = FlowRouter.getQueryParam('projects')
    //sweetAlert("e.target", e.target.id)
    var _id = e.target.id
    if (currentState == _id) {
      FlowRouter.setQueryParams({ projects: null })
    } else {
      FlowRouter.setQueryParams({ projects: _id, type: 'project' })
    }
  },

  handleFilterDefineSomeWork(e) {
    var currentState = FlowRouter.getQueryParam('mode')
    if (currentState) {
      FlowRouter.setQueryParams({ mode: null })
    }
  },

  handleFilterDoDefinedWork(e) {
    var currentState = FlowRouter.getQueryParam('mode')
    if (!currentState) {
      FlowRouter.setQueryParams({ mode: 'do' })
    }
  },


  getTypeParam() {
    return FlowRouter.getQueryParam('type')
  },

  getStepParam() {
    // see full API - https://github.com/meteorhacks/flow-router#api
    return FlowRouter.getQueryParam('step');
  },

  setProjectOrContext(e) {
    const _id = e.target.className
    //sweetAlert("projorcont", "success")
    const projorcont = e.target.value
    const data = {type: projorcont} 
    Meteor.call('tasks.update', data, _id)
    // {_id: _id}, {$set: {type: projorcont}})
  },

};

export default FeedDomain
