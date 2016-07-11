import Ember from 'ember';

export default Ember.Component.extend({
  masonId: null,
  itemSelector: 'grid-item',
  height: 1,

  didInsertElement() {
    this.$('#' + this.get('masonId')).isotope({
      itemSelector: '.' + this.get('itemSelector'),
      filter: '.website, .photography, .design, *',
      layoutMode: 'masonry'
    });
  }
});
