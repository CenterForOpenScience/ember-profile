import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      name: 'John Doe',
      description: 'Developer at Charlottesville VA'
    };
  }
});
