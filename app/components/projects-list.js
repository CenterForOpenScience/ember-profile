import Ember from "ember";
import CpPanelsComponent from "ember-collapsible-panel/components/cp-panels";

export default CpPanelsComponent.extend({
    classNames: ['projects-panel'],
    elementId: 'projects-list',
    accordion: true,
    sorted: Ember.computed.sort('model', 'sortDefinition'),
    store: Ember.inject.service(),
    didInsertElement() {
        // Set project.collaborators to project.contributors(each.user.fullName)
        this.get('store').find('user', 'd94fu').then(me =>
            this.get('model').forEach(node => {
                node.set('collaborators', []);
                node.get('contributors').then(contributors =>
                    contributors.forEach(contributor =>
                        contributor.get('users').then(user =>
                            me === user ? '' : node.get('collaborators').pushObject(user.get('fullName'))
                        )));
            }));
    }
});
