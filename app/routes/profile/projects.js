import Ember from "ember";

export default Ember.Route.extend({
    model() {
        return this.store.findRecord('user', 'd94fu').then(user => user.get('nodes'));
    }
});
