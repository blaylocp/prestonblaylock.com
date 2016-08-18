import Ember from 'ember';

export function escapeCss(params/*, hash */) {
  let value = Ember.Handlebars.Utils.escapeExpression(params[0]);
  return Ember.String.htmlSafe(`${value}`);
}

export default Ember.Helper.helper(escapeCss);
