import Ember from 'ember';

export default Ember.Route.extend({
  conversions: [{
    selectors: ['p'],
    type: 'textarea'
  }, {
    selectors: ['span', 'dd'],
    type: 'input'
  }],
  model() {
    return {
      editing: false,
      name: 'John Doe',
      location: 'Charlottesville, VA',
      profession: 'Developer'
    };
  },
  actions: {
  	toggle() {
      let editing = !this.get('currentModel.editing');
      this.set('currentModel.editing', editing);
      let main = Ember.$('main');
      main.hide();
      for (const conversion of this.get('conversions')) {
        let els = main.find(conversion.selectors.join('.editable, ') + '.editable');
        for (let el of els) {
          el = Ember.$(el);
          if (editing) {
            let t = el.text();
            el.text('').append(Ember.$(`<${conversion.type} class="form-control" />`, {value: t}).val(t));
          } else {
            el.text(el.find(conversion.type).val());
          }
        }
      }
      main.fadeTo('fast', 1.0);
  	}
  }
});
