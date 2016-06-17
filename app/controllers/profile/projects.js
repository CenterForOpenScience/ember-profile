import Ember from 'ember';

export default Ember.Controller.extend({
	sort: ['name:asc'],
	actions: {
		projectSort(sortBy) {
      var sortVal;
      if ((this.get('sort')[0].includes(sortBy + ":desc"))){
        sortVal = sortBy + ":asc";
      }
      else {
        sortVal = sortBy + ":desc";
      }
			this.set('sort', [sortVal]);
		}
	}
});
