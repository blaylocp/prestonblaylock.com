import Ember from 'ember';

export default Ember.Component.extend({
  cogId: null,
  direction: "forward",

  didInsertElement() {
    console.log();
    var theDirection = this.get('direction');
    var $cog = this.$('#' + this.get('cogId')),
        $body = this.$(document.body),
        bodyHeight = $body.height();
        console.log($cog);

    this.$(window).scroll(function () {
        if(theDirection == "forward"){
          console.log("Working");
          $cog.css({
              'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 360) + 'deg)'
          });
        } else {
          $cog.css({
              'transform': 'rotate(-' + ($body.scrollTop() / (bodyHeight-10) * 360) + 'deg)'
          });
        }
    });
  }

});
