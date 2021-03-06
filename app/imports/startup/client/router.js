import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/study-section', {
  name: 'Study_Section_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Study_Section_Page' });
  },
});

FlowRouter.route('/calendar', {
  name: 'Calendar_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Calendar_Page' });
  },
});

FlowRouter.route('/leaderboard', {
  name: 'Game_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Game_Page' });
  },
});


FlowRouter.route('/profile', {
  name: 'User_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Profile_Page' });
  },
});

FlowRouter.route('/create-section', {
  name: 'Create_Section_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Create_Section_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
