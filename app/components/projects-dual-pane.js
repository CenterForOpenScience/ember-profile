import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    select(project) {
      this.set('project', project);
    }
  }
});
