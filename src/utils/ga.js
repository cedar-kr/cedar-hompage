export const pageview = (url) => {
  // console.log(url);
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url
  });
};

export const event = ({ action, category, label, value }) => {
  // console.log(`GA - ${category}-${label}-${action}`);
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
