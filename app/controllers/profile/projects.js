import Ember from 'ember';

export default Ember.Controller.extend({
	sort: ['name'],
	actions: {
		projectSort(sortBy) {
			this.set('sort', [sortBy]);
		}
	}
});
