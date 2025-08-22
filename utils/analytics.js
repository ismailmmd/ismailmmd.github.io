/**
 * Google Analytics event tracking utility
 */
const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};

export const trackSocialClick = (platform, url) => {
  trackEvent('click', 'social_link', platform, url);
};

export const trackProjectClick = (projectName, url) => {
  trackEvent('click', 'project_link', projectName, url);
};

export const trackExperienceClick = (companyName, url) => {
  trackEvent('click', 'experience_link', companyName, url);
};
