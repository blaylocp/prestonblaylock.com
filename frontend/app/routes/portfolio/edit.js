import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    savePost(data) {
      console.log(data);
    }
  },

  model(params) {
    return this.get('store').findRecord('portfolio', params.item_id);
  }
});
