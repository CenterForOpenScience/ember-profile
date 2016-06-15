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
        link: '/'
      }, {
        name: 'John Doe',
        site: 'LinkedIn',
        link: '/'
      }, {
        site: 'ORCID',
        link: '/'
      }, {
        site: 'ResearcherID',
        link: '/'
      }, {
        site: 'Github',
        link: '/'
      }, {
        site: 'ImpactStory',
        link: '/'
      }, {
        site: 'Google Scholar',
        link: '/'
      }, {
        site: 'ResearchGate',
        link: '/'
      }, {
        site: 'Academia',
        link: '/'
      }, {
        site: 'Baidu Scholar',
        link: '/'
      }],
      employment: [{
        name: 'Center for Open Science',
        title: 'Developer',
        dates: 'May 2016 – Current',
        location: 'Charlottesville, VA'
      }, {
        name: 'Willowtree',
        title: 'Software Engineer',
        dates: 'April 2015 – May 2016',
        location: 'Charlottesville, VA'
      }],
      education: [{
        name: 'University of Virginia',
        degree: 'Computer Science',
        dates: 'August 2011 – May 2015',
        location: 'Charlottesville, VA'
      }, {
        name: 'Virginia Tech',
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
