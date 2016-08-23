import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('house-list-subcommittees', 'Integration | Component | house list subcommittees', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{house-list-subcommittees}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#house-list-subcommittees}}
      template block text
    {{/house-list-subcommittees}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
