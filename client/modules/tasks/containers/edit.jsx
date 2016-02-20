// import {useDeps} from 'react-simple-di';
// import {composeWithTracker, composeAll} from 'react-komposer';
//
// import {singleComposer} from '../../composers/tasks/single.jsx';
// import {editComposer, depsMapper} from '../../composers/tasks/edit.jsx';
import dataComposer from '../composers/edit.jsx';

import Component from '../components/_form.jsx';

export default dataComposer(Component);

// export default composeAll(
//     composeWithTracker(singleComposer),
//     composeWithTracker(editComposer),
//     useDeps(depsMapper)
//   )(Component);
