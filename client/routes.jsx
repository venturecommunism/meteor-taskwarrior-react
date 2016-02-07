/*global FlowRouter, FlowLayout */

// Flow Router handles rendering out our page views (Blaze templates)
// these views can then call the router API to get reactive updates on
// state in the URL. This can then be passed down into children if needed

// If you're looking at using an all React front end (no Blaze) then using
// react-router (via browserfy) would prob. be better unless you just need
// an even more simple router!

//If everything breaks might want to add the following line back in but for now it seems to work and Mantra doesn't use it
//FlowLayout.setRoot('body');

import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './core/components/main_layout.jsx';
import Header from './modules/header/containers/Header';
import Feed from './core/containers/Feed';
import Footer from './modules/footer/containers/Footer';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout)

  FlowRouter.route('/newhome', {
    name: 'Home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/about', {
    name: 'About',
    action() {         
      mount(MainLayoutCtx, {
        content: () => (<About />)
      });
    } 
  });

  FlowRouter.route('/feed', {
    name: 'Feed',
    action() {         
      mount(MainLayoutCtx, {
        content: () => (<Feed />)
      });
    }
  });

/*
  // helper to layout the parent page view and log debug data
  function renderView() {
    renderMainLayoutWith(this.name);
    console.log("[FlowRouter] params", this.name, FlowRouter._current.params);
  }

  function renderMainLayoutWith(view) {
    ReactLayout.render('mainLayout', {
      top: "Header",
      main: view,
      bottom: "Footer"
    });
  }
*/
}
