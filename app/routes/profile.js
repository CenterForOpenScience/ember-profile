import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      name: 'John Doe',
      location: 'Charlottesville, VA',
      profession: 'Developer'
    };
  }
});
