import Ember from 'ember';

export function socialUsername([link]/*, hash*/) {
  return link ? link.substring(link.lastIndexOf('/') + 1) : '';
}

export default Ember.Helper.helper(socialUsername);
