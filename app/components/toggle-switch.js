import Ember from 'ember';

export default Ember.Component.extend({
  // isEnabled: false,
  classNames: ['fa', 'fa-2x'],
  classNameBindings: ['toggleIcon'],
  toggleIcon: function() {
    console.log(this.get('isEnabled'));
    return this.get('isEnabled') ? 'fa-toggle-on' : 'fa-toggle-off';
  }.property('isEnabled')
});
