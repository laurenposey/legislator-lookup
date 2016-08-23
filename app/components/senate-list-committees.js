import Ember from 'ember';

export default Ember.Component.extend({
  senateList: false,
  actions: {
    showSenateList() {
      this.set('senateList', true);
    },
    hideSenateList() {
      this.set('senateList', false);
    },
    showSubs() {
      var params = {
        committee_id: this.get('committee.committee_id')
      };
      this.sendAction('showSubs', params);
    }
  }
});
