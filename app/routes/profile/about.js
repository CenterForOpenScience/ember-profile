import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      personal: {
        bio: 'Quorum dimsum color sat allmet, consecutive alipsync elite, said do softmod tempor incident ut labor et colore magna carta. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eat comodo kumquat. Duis aute irure color in reprehenderit in voluptuous velit esse cillum dolore eu fugiat nulla pariatur. Excalibeur isnt occaecat cupidatat non prudent, sunt in culpa qui official deserunt molly anim id est laborum.',
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
      }],
      uploads: [{}]
    };
  },

  actions: {
    show_modal() {
      Ember.$('#uploadModal').modal('show');
    }
  }
});
