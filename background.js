// Background service worker for Meeting Keynotes extension
// This script handles background tasks and events

chrome.runtime.onInstalled.addListener(() => {
  console.log('Meeting Keynotes extension installed');
});
