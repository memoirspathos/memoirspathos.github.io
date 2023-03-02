// Get the Twitter widget iframe
const twitterIframe = document.querySelector('#twitter #twitter-widget-0');

// Set the max-height CSS property of the Twitter widget iframe
const articleHeight = 300;
twitterIframe.onload = () => {
  const widgetHeight = twitterIframe.contentWindow.document.body.scrollHeight;
  twitterIframe.style.height = `${Math.min(widgetHeight, articleHeight)}px`;
};
