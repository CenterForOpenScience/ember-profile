import Ember from 'ember';

export function projectCollaborators([project, map]/*, hash*/) {
  return map[project] ? map[project].join('; ') : 'None';
}

export default Ember.Helper.helper(projectCollaborators);
