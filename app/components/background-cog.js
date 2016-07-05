import Ember from 'ember';

export default Ember.Component.extend({
  cogId: null,
  direction: "forward",
  speed: 1,

  didInsertElement() {
    var theDirection = this.get('direction');
    var speed = this.get('speed');
    var $cog = this.$('#' + this.get('cogId')),
        $body = this.$(document.body),
        bodyHeight = $body.height();

    this.$(window).scroll(function () {
        if(theDirection === "forward"){
          // $cog.css({
          //     'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 360) + 'deg)'
          // });
          $cog.css({
              'transform': 'rotate(' + ($body.scrollTop() * speed) + 'deg)'
          });
        } else {
          $cog.css({
              'transform': 'rotate(-' + ($body.scrollTop() * speed) + 'deg)'
          });
        }
    });
  }

});
