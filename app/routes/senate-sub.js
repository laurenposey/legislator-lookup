import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = "http://congress.api.sunlightfoundation.com/committees?chamber=senate&subcommittee=true&parent_committee_id=" + params.committee_id + "&apikey=8e10fe5f3d214ebd892c4ea161cf16cf";
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
