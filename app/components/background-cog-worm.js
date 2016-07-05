import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    var $worm = this.$('.gear-teeth'),
        $body = this.$(document.body);

    this.$(window).scroll(function () {
      var $scrollAmount = ($body.scrollTop() * 2.5);
      console.log($scrollAmount);
      $worm.css({
        'background-position-y': -($scrollAmount)
      });
    });
  }
});
