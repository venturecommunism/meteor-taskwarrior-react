import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const singleComposer = ({context, _id, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('_tasks.DELETE_ERROR');
  if (Meteor.subscribe('_tasks.single', _id).ready()) {
    const record = Collections._tasks.findOne(_id);
    if (record) {
      onData(null, {record, error});
    } else {
      // FlowRouter.go('/tasks');
    }
  }
  // clearErrors when unmounting the component
  return clearErrors;

};

export const depsMapper = (context, actions) => ({
  deleteAction: actions._tasks.delete,
  clearErrors: actions._tasks.clearErrors,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(singleComposer),
    useDeps(depsMapper)
  )(component);
