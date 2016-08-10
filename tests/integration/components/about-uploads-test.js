import {moduleForComponent, test} from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent('about-uploads', 'Integration | Component | about uploads', {
    integration: true
});

test('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{about-uploads}}`);

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(hbs`
    {{#about-uploads}}
      template block text
    {{/about-uploads}}
  `);

    assert.equal(this.$().text().trim(), 'template block text');
});
