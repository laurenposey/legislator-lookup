import Ember from 'ember';

export default Ember.Component.extend({
  showList: false,
  actions: {
    updateShowList(){
      this.set("showList", true);
    },
    hideHouseList() {
      this.set("showList", false);
    },
    showSubcommittees() {
      var params = {
        commitee_id: this.get('committee.committee_id')
      };
      this.sendAction('showSubcommittees', params);
    }
  }
});
