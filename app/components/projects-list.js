import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    select(project) {
      this.get('onSelect')(project);
    }
  }
});
