import Ember from 'ember';

export default Ember.Component.extend({
  hasSubcommittees: Ember.computed('this.subs', function() {
    if (this.subs.length > 0) {
      return(true);
    }
    else {
      return(false);
    }
  })
});
