import {moduleForComponent, test} from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent('projects-detail', 'Integration | Component | projects detail', {
    integration: true
});

test('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{projects-detail}}`);

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(hbs`
    {{#projects-detail}}
      template block text
    {{/projects-detail}}
  `);

    assert.equal(this.$().text().trim(), 'template block text');
});
