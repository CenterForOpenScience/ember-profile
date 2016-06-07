import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      personal: {
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        phone: '(123) 456-7890',
        join_date: '5-16-2016'
      },
      social: [{
        name: 'johnDoe45',
        site: 'Twitter',
        link: '/',
        icon: 'fa fa-twitter-square fa-3x'
      }, {
        name: 'John Doe',
        site: 'LinkedIn',
        link: '/',
        icon: 'fa fa-linkedin-square fa-3x'
      }],
      employment: [{
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
