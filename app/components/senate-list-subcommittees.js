import Ember from 'ember';

export default Ember.Component.extend({
  commitee_name: Ember.computed('committeeName', function(){
    this.get('params.commitee_name');
    return(params.commitee_name);
    debugger;
  }),
  hasSubcommittees: Ember.computed('this.subs', function() {
    if (this.subs.length > 0) {
      return(true);
    }
    else {
      return(false);
    }
  })
});
