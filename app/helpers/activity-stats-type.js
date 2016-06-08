import Ember from 'ember';

const projectStatTypes = {
  total_projects: 'Total Projects',
  public_projects: 'Public Projects',
  year_total_projects: 'Projects This Year',
  total_comp: 'Total Components',
  public_comp: 'Public Components',
  year_total_comp: 'Components This Year',
  registrations: 'Registrations',
  files: 'Files Added',
  comments: 'Comments',
  most_contributed: 'Most Contributed Project'
};
export function activityStatsType([type]/*, hash*/) {
  return projectStatTypes[type] || type;
}

export default Ember.Helper.helper(activityStatsType);
