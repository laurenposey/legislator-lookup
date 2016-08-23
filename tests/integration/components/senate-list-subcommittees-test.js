import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('senate-list-subcommittees', 'Integration | Component | senate list subcommittees', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{senate-list-subcommittees}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#senate-list-subcommittees}}
      template block text
    {{/senate-list-subcommittees}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
