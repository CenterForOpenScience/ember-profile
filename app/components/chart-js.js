import Ember from "ember";

export default Ember.Component.extend({
    tagName: 'canvas',
    attributeBindings: ['width', 'height'],
    didInsertElement() {
        const chart = new Chart(this.get('element'), {
            type: this.get('type'),
            data: this.get('data'),
            options: this.get('options')
        });
        this.set('chart', chart);
        this.addObserver('data', this, this.updateChart);
        this.addObserver('data.[]', this, this.updateChart);
        this.addObserver('options', this, this.updateChart);
    },

    willDestroyElement() {
        this.get('chart').destroy();
        this.removeObserver('data', this, this.updateChart);
        this.removeObserver('data.[]', this, this.updateChart);
    },

    updateChart() {
        const chart = this.get('chart');
        chart.config.data = this.get('data');
        chart.update();
    }
});
