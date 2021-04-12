
// you can add this snippet at the end of the script tag that you added into the head section of your HTML file
// for the analitics.js of Segment
// once the analitics.js loaded from the CDN this will grab the "try for free botton" and send a call to segment server
// with an event name "clicked try it for free"

const button = document.querySelector(".tracking-hero-primary-button")

analytics.trackLink(button, 'clicked try it for free');