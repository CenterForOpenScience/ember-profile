import Ember from 'ember';

export default Ember.Route.extend({
  conversions: [{
    selectors: ['p'],
    type: 'textarea'
  }, {
    selectors: ['span', 'dd', 'h4'],
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
      const main = Ember.$('main');
      main.hide();
      Ember.$('#file-upload').show();
      for (const conversion of this.get('conversions')) {
        const els = main.find(conversion.selectors.join('.editable, ') + '.editable');
        for (let el of els) {
          el = Ember.$(el);
          if (editing) {
            const input = Ember.$(`<${conversion.type} class="form-control" />`);
            // input.val(el.text()).css({width: el.css('width')});
            input.val(el.text())
            el.text('').append(input);
          } else {
            el.text(el.find(conversion.type).val());
            Ember.$('#file-upload').hide();
          }
        }
      }
      main.fadeTo('fast', 1.0);
  	}
  }
});
