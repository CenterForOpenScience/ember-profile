import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      personal: {
        bio: 'Help me',
        phone: '1234',
        join_date: 'tomorrow'
      },
      social: [{
        name: 'Twitter',
        link: '/'
      }, {
        name: 'LinkedIn',
        link: '/'
      }],
      employment: [{
        name: 'Center for Closed Science',
        department: 'internets',
        title: 'pro',
        dates: 'yesterday - today'
      }, {
        name: 'Center for Open Science',
        department: 'Infrastructure',
        title: 'Developer',
        dates: 'tomorrow - saturday'
      }],
      education: [{
        name: 'Ellis\' Ember Education Experiment',
        department: 'Learning',
        degree: '90º',
        dates: '6/6/16 - 6 June 2016'
      }]
    };
  }
});
