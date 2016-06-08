import Ember from 'ember';

export default Ember.Route.extend({
  conversions: [{
    selectors: ['#bio-text'],
    type: 'textarea'
  }, {
    selectors: ['#phone-number'],
    type: 'input'
  }],
  editing: false,
  toggleIcon: Ember.computed('editing', () => {
    return this.get('editing') ? 'toggle-off' : 'toggle-on';
  }),
  model() {
    return {
      name: 'John Doe',
      location: 'Charlottesville, VA',
      profession: 'Developer'
    };
  },
  actions: {
  	toggle() {
      console.log(this);
      console.log(this.getProperty('toggleIcon'))
      this.setProperty('editing', !this.get('editing'));
      let main = Ember.$('main');
      main.fadeTo('fast', 0.3);
      let visible = Ember.$('#toggle-on').is(':visible');
      for (const conversion of this.get('conversions')) {
        for (const selector of conversion.selectors) {
          let el = main.find(selector);
          if (visible) {
            let t = el.text();
            el.text('').append(Ember.$(`<${conversion.type} class="form-control" />`,{'value' : t}).val(t));
          } else {
            el.text(el.find(conversion.type).val());
          }
        }
      }
      main.fadeTo('fast', 1.0);
  	}
  }
});
