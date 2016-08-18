import Ember from 'ember';

export function imageUrl(params, hash) {

  return `/api/v1/images/${hash.size}/${params[0]}`;
}

export default Ember.Helper.helper(imageUrl);
