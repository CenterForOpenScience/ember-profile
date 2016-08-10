import Ember from "ember";

export default Ember.Component.extend({
    elementId: 'collaborators-list',
    tagName: 'ul',
    sorted: Ember.computed.sort('model', 'sortDefinition')
});
