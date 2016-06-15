import Ember from 'ember';

export default Ember.Controller.extend({
  sort: ['projects:desc'],
  actions: {
    filter(){
      var filter = Ember.$('#collab-filters option:selected').val();
      this.set('sort', [filter]);
    }
  }
});
