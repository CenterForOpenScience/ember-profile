import Ember from 'ember';
import CpPanelsComponent from 'ember-collapsible-panel/components/cp-panels';

export default CpPanelsComponent.extend({
  classNames: ['projects-panel'],
  elementId: 'projects-list',
  accordion: true,
  actions: {
    select(project) {
      this.get('onSelect')(project);
    }
  }
});
