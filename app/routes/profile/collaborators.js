import Ember from "ember";

export default Ember.Route.extend({
    collaborators: [],
    model() {
        return this.get('collaborators');
    },
    afterModel() {
        this.get('collaborators').clear();
        let lookup = {};
        return this.store.find('user', 'd94fu').then(me =>
            me.get('nodes').then(nodes =>
                nodes.forEach(node =>
                    node.get('contributors').then(contributors =>
                        contributors.forEach(contributor =>
                            contributor.get('users').then(user => {
                                if (user === me) {
                                    return;
                                }
                                if (lookup[user] === undefined) {
                                    lookup[user] = this.get('collaborators').length;
                                    user.set('projects', 1);
                                    this.get('collaborators').pushObject(user);
                                } else {
                                    this.get('collaborators').objectAt(lookup[user]).incrementProperty('projects');
                                }
                            }))))));
    }
});
