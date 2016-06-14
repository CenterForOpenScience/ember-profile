import Ember from 'ember';

export default Ember.Component.extend({
  elementId: 'collaborators-list',
  tagName: 'ul',
  sort: Ember.computed.sort('model', 'sortDefinition'),
  sortDefinition: ['projects:desc'],
});
