import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/posts';
//import coreModule from './core';
import commentsModule from './modules/comment_list';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(commentsModule);
app.init();
