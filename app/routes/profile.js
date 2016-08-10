import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // console.log(this.store.findRecord('user', 'd94fu'));
    // return {
    //   name: 'John Doe',
    //   description: 'Developer at Charlottesville VA'
    // };
    return this.store.findRecord('user', 'd94fu');
  }
});
