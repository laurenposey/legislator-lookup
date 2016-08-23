import Ember from 'ember';

export default Ember.Component.extend({
  hasSubcommittees: Ember.computed('this.subcommittees', function() {
    if (this.subcommittees.length > 0) {
      return(true);
    }
    else {
      return(false);
    }
  })
});
