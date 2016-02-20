// import {useDeps} from 'react-simple-di';
// import {composeWithTracker, composeAll} from 'react-komposer';

// import {collectionComposer} from '../../composers/tasks/collection.jsx';
import dataComposer from '../composers/collection.jsx';

import Component from '../components/_collection.jsx';

export default dataComposer(Component);

// export default composeAll(
//     composeWithTracker(collectionComposer),
//     useDeps()
//   )(Component);
