/* globals Parallax */
import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        var p = new Parallax('#' + this.get("id") , {
            offsetYBounds: 50,
            intensity: 20,
            center: 0.5,
            safeHeight: 0.15
        });

        p.init();
    }
});
