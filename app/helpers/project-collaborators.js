import Ember from 'ember';

export function projectCollaborators([collaborators]/*, hash*/) {
  return collaborators ? collaborators.join('; ') : '';
}

export default Ember.Helper.helper(projectCollaborators);
