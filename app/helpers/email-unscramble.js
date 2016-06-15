import Ember from 'ember';

export function emailUnscramble([email, date]/*, hash*/) {
  let decoded = '';
  // XOR
  for (let i = 0; i < Math.max(email.length, date.length); i++) {
    decoded += String.fromCharCode(email.charCodeAt(i % email.length) ^ date.charCodeAt(i % date.length));
  }
  return decoded;
}

export default Ember.Helper.helper(emailUnscramble);
