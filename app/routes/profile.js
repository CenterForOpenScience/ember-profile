import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      editing: false,
      name: 'John Doe',
      description: 'Developer at Charlottesville VA'
    };
  },
  actions: {
  	toggle() {
      let editing = !this.get('currentModel.editing');
      this.set('currentModel.editing', editing);
      const main = Ember.$('main');
      main.hide();
      Ember.$('#file-upload').toggle();
      main.fadeTo('fast', 1.0);
  	}
  }
});
