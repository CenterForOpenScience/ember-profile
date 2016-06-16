import Ember from 'ember';

export function emailUnscramble([email, date]/*, hash*/) {
  let decoded = '';
  // XOR
  for (let i = 0; i < email.length; i++) {
    decoded += String.fromCharCode(email.charCodeAt(i) ^ date.charCodeAt(i % date.length));
  }
  return decoded;
}

export default Ember.Helper.helper(emailUnscramble);
