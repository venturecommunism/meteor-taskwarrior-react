// import {useDeps} from 'react-simple-di';
// import {composeWithTracker, composeAll} from 'react-komposer';
//
// import {singleComposer} from '../../composers/tasks/single.jsx';
import dataComposer from '../composers/single.jsx';

import Component from '../components/_single.jsx';

export default dataComposer(Component);

// export default composeAll(
//     composeWithTracker(singleComposer),
//     useDeps()
//   )(Component);
