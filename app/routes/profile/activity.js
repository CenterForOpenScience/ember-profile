import Ember from "ember";

export default Ember.Route.extend({
    model() {
        return {
            projects: {
                total_projects: '22',
                total_comp: '7',
                registrations: '1',
                comments: '42',
                contributors: '16',
                downloads: '349',
                page_views: '869',
                recent_views: '23',
                recent_downloads: '11',
                most_downloaded: 'Correlations between Causations',
                most_viewed: 'Open Science Framework',
                most_contributed: 'Open Science Framework'
            },
            recent_activity: [{
                datetime: '5-29-2016 4:05pm',
                description: 'Added component'
            }, {
                datetime: '5-29-2016 2:19pm',
                description: 'Changed fontsize on Open Science Framework Wiki'
            }, {
                datetime: '5-22-2016 8:31am',
                description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo'
            }, {
                datetime: '5-18-2016 9:00pm',
                description: 'Added new project "Profile Redesign"'
            }, {
                datetime: '5-17-2016 8:31am',
                description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo'
            }],
            chartData: {
                labels: ['August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
                datasets: [{
                    label: 'Total Project Views',
                    data: [1, 4, 5, 7, 11, 12, 15, 20, 7, 9],
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.3)',
                    pointBorderWidth: 1,
                    pointHoverWidth: 5,
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 5,
                    pointHitRadius: 10
                }, {
                    label: 'Total Citations',
                    data: [2, 1, 4, 3, 1, 2, 2, 3, 1, 1],
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.3)',
                    pointBorderWidth: 1,
                    pointHoverWidth: 5,
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 5,
                    pointHitRadius: 10
                }]
            }
        };
    }
});
