import Ember from 'ember';

const providerIcons = {
  twitter: 'twitter-square',
  linkedin: 'linkedin-square',
  github: 'github',
  googlescholar: 'google'
};

export function socialIcon([provider]/*, hash*/) {
  return provider && providerIcons[provider.toLowerCase().replace(/ /g, '')] || 'external-link-square';
}

export default Ember.Helper.helper(socialIcon);
