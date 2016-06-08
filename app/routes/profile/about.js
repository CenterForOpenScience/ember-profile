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
        dates: '5-16-2016 - current'
      }, {
        name: 'Willowtree',
        department: 'Development',
        title: 'Software Engineer',
        dates: '4-29-2015 - 5-10-2016'
      }],
      education: [{
        name: 'University of Virginia',
        department: 'College of Engineering',
        degree: 'Computer Science',
        dates: '8-22-2011 - 5-14-2015'
      }, {
        name: 'Virginia Tech',
        department: 'College of Engineering',
        degree: 'Masters of Computer Science',
        dates: '8-22-2015 - 5-17-2017'
      }]
    };
  }
});
