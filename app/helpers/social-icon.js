import Ember from "ember";

const providerIcons = {
    twitter: 'twitter-square',
    linkedin: 'linkedin-square',
    github: 'github',
    plus: 'google'
};

export function socialIcon([provider]/*, hash*/) {
    return provider && providerIcons[Object.keys(providerIcons).find((prop) => {
            return provider.indexOf(prop) > -1;
        })] || 'external-link-square';
}

export default Ember.Helper.helper(socialIcon);
