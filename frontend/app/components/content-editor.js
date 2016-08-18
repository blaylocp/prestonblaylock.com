/* global ContentTools */
import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['container'],
  title: "main-content",

  didInsertElement() {
    var _this = this;

    var editor;
    ContentTools.StylePalette.add([
      new ContentTools.Style('Author', 'author', ['p'])
    ]);

    editor = ContentTools.EditorApp.get();
    editor.init('*[data-editable]', 'data-name');

    editor.addEventListener('saved', function (ev) {
      var name, payload, regions;

      // Check that something changed
      regions = ev.detail().regions;
      if (Object.keys(regions).length === 0) {
          return;
      }

      this.busy(true);
      _this.sendAction('savePost', regions);
    });

  }
});
