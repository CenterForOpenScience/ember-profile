import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['fa', 'fa-2x'],
  classNameBindings: ['toggleIcon'],
  tagName: 'i',
  toggleIcon: function() {
    return this.get('isEnabled') ? 'fa-toggle-on' : 'fa-toggle-off';
  }.property('isEnabled')
});
