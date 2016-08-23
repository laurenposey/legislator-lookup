import Ember from 'ember';

export default Ember.Component.extend({
  showList: false,
  actions: {
    updateShowList(){
      this.set("showList", true);
    },
    hideHouseList() {
      this.set("showList", false);
    }
  }
});
