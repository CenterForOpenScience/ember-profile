import Ember from 'ember';
import CpPanelsComponent from 'ember-collapsible-panel/components/cp-panels';

export default CpPanelsComponent.extend({
  classNames: ['projects-panel'],
  elementId: 'projects-list',
  accordion: true,
  sorted: Ember.computed.sort('model', 'sortDefinition'),
  sortDefinition: ['name:asc'],
  actions: {
    select(project) {
      this.get('onSelect')(project);
    }
  }
});
