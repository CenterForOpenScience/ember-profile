import Ember from 'ember';

export default Ember.Component.extend({
  elementId: 'profile-projects',
  tagName: 'main',
  actions: {
    select(project) {
      this.set('project', project);
    }
  }
});
