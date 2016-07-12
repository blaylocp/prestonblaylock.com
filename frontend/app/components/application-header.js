import Ember from 'ember';

export default Ember.Component.extend({
    shrink: null,
    didInsertElement(){
        var _this = this;
        _this.$(document).on("scroll", function(){
            if(_this.$(document).scrollTop() > 40){
                _this.set('shrink', "shrink");
            }
            else{_this.set("shrink", "normal");}
        });
    },
    actions: {
        slideMenu() {
            this.sendAction('slideMenu');
        }
    }
});
