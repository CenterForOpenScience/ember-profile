import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    var canvas = document.getElementById('activity-visits-plot');
    var ctx = canvas.getContext('2d');
    canvas.width  = $(canvas).parent().width();
    canvas.height = $(canvas).parent().height();
    this.setProperties({
      ctx: ctx,
      canvas: canvas
    })
    new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [{
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55],
          }]
        }
    });
  }
});