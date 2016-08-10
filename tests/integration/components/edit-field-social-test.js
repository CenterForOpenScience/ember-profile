import {moduleForComponent, test} from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent('edit-field-social', 'Integration | Component | edit field social', {
    integration: true
});

test('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{edit-field-social}}`);

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(hbs`
    {{#edit-field-social}}
      template block text
    {{/edit-field-social}}
  `);

    assert.equal(this.$().text().trim(), 'template block text');
});
