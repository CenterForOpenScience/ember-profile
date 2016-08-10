import Ember from "ember";

const projectStatTypes = {
    total_projects: 'Total Projects',
    total_comp: 'Total Components',
    registrations: 'Registrations',
    comments: 'Comments',
    contributors: 'Total Contributors',
    downloads: 'Total Downloads',
    most_downloaded: 'Most Downloaded Project',
    most_viewed: 'Most Viewed Project',
    page_views: 'Total Views',
    recent_views: 'Total Views Last 24-Hours',
    recent_downloads: 'Total Downloads Last 24-Hours',
    most_contributed: 'Most Contributed Project'
};

export function activityStatsType([type]/*, hash*/) {
    return projectStatTypes[type] || type;
}

export default Ember.Helper.helper(activityStatsType);
