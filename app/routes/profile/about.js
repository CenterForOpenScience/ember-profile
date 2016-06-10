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
      }, {
        name: '',
        site: 'ORCID',
        link: '/',
        icon: 'fa fa-external-link-square fa-3x'
      }, {
        name: '',
        site: 'ResearcherID',
        link: '/',
        icon: 'fa fa-external-link-square fa-3x'
      }, {
        name: '',
        site: 'Github',
        link: '/',
        icon: 'fa fa-github fa-3x'
      }, {
        name: '',
        site: 'ImpactStory',
        link: '/',
        icon: 'fa fa-external-link-square fa-3x'
      }, {
        name: '',
        site: 'Google Scholar',
        link: '/',
        icon: 'fa fa-google fa-3x'
      }, {
        name: '',
        site: 'ResearchGate',
        link: '/',
        icon: 'fa fa-external-link-square fa-3x'
      }, {
        name: '',
        site: 'Academia',
        link: '/',
        icon: 'fa fa-external-link-square fa-3x'
      }, {
        name: '',
        site: 'Baidu Scholar',
        link: '/',
        icon: 'fa fa-external-link-square fa-3x'
      }],
      employment: [{
        name: 'Center for Open Science',
        department: 'Infrastructure',
        title: 'Developer',
        dates: 'May 2016 – Current',
        location: 'Charlottesville, VA'
      }, {
        name: 'Willowtree',
        department: 'Development',
        title: 'Software Engineer',
        dates: 'April 2015 – May 2016',
        location: 'Charlottesville, VA'
      }],
      education: [{
        name: 'University of Virginia',
        department: 'College of Engineering',
        degree: 'Computer Science',
        dates: 'August 2011 – May 2015',
        location: 'Charlottesville, VA'
      }, {
        name: 'Virginia Tech',
        department: 'College of Engineering',
        degree: 'Masters of Computer Science',
        dates: 'August 2015 – May 2017',
        location: 'Blacksburg, VA'
      }]
    };
  }
});
