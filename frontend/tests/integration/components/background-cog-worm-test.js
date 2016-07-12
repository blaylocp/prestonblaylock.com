import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('background-cog-worm', 'Integration | Component | background cog worm', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{background-cog-worm}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#background-cog-worm}}
      template block text
    {{/background-cog-worm}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
