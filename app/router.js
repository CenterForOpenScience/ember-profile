import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('profile', function() {
    this.route('about');
    this.route('projects');
    this.route('collaborators');
    this.route('activity');
  });
});

export default Router;
