import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = "http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=false&apikey=8e10fe5f3d214ebd892c4ea161cf16cf";
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  },
  // model: function() {
  //   var url = "http://congress.api.sunlightfoundation.com/committees?chamber=senate&apikey=8e10fe5f3d214ebd892c4ea161cf16cf";
  //   return Ember.$.getJSON(url).then(function(responseJSON){
  //     return responseJSON.results;
  //   });
  // },
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },
    showSubcommittees(params) {
      this.transitionTo('subcommittee', params.committee_id);
    }
  }
});
