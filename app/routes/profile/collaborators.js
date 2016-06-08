import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      name: 'Luke Mash',
      projects: '6',
      location: 'Charlottesville, VA',
      title: 'Developer',
      img: 'https://cos.io/static/img/people/marsh.jpg'
    }, {
      name: 'Evan Rhodes',
      projects: '5',
      location: 'Chicago, IL',
      title: 'Researcher',
      img:'https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg'
    }, {
      name: 'Jeanette Stans',
      projects: '5',
      location: 'Charlottesville, VA',
      title: 'Developer',
      img:'http://science-all.com/images/wallpapers/profile-pics/profile-pics-18.jpg'
    }, {
      name: 'Scott Jenkins',
      projects: '3',
      location: 'Orlando, FL',
      title: 'Developer',
      img:'https://upload.wikimedia.org/wikipedia/commons/1/13/Daniel_Ingram_Profile.png'
    }, {
      name: 'Thane DeVans',
      projects: '3',
      location: 'Washington DC',
      title: 'Developer',
      img:'http://zblogged.com/wp-content/uploads/2015/11/5.png'
    },  {
      name: 'Danny DeVito',
      projects: '2',
      location: 'Philadelphia, PA',
      title: 'Actor',
      img:'https://resizing.flixster.com/T9HmF7XhlxjMCcwetOOyfIadUDw=/344x344/v1.cjs0Nzk1NjtqOzE2OTk2OzIwNDg7MzQ0OzM0NA'
    }, {
      name: 'Allison Palma',
      projects: '1',
      location: 'Buffalo, NY',
      title: 'Researcher',
      img:'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
    }, {
      name: 'Samuel Lahar',
      projects: '1',
      location: 'Charlottesville, VA',
      title: 'Manager',
      img:'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10629609_10205150029179131_636541467117985880_n.jpg?oh=64a740f62497280bb4b3ebdaac509984&oe=57D677E4'
    }];
  }
});
