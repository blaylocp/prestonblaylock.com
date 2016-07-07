import Ember from 'ember';

export default Ember.Component.extend({
  masonId: null,
  itemSelector: 'grid-item',

  didInsertElement() {
    this.$('#' + this.get('masonId')).isotope({
      itemSelector: '.' + this.get('grid-item'),
      masonry: {
        columnWidth: 200
      }
    });
  }
});
