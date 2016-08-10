import Ember from "ember";

export default Ember.Controller.extend({
    sort: ['title:asc'],
    selected: 'title',
    actions: {
        projectSort(sortBy, direction) {
            let sortVal = ':asc';
            if (this.get('sort')[0].indexOf(sortBy) === -1 && direction || this.get('sort')[0].indexOf(sortBy + ':asc') > -1) {
                sortVal = ':desc';
            }
            this.set('selected', sortBy);
            this.set('sort', [sortBy + sortVal]);
        }
    }
});
