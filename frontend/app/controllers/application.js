import Ember from 'ember';

export default Ember.Controller.extend({
	slide: false,
	actions: {
	   slideMenu: function() {
    		this.toggleProperty('slide');
	    }
	}
});
