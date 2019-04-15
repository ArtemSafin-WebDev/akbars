export default function() {
  document.documentElement.addEventListener('tabchange', function(event) {
    const tabname = event.detail.tabID
    if (tabname && tabname !== '') {
      let pageUrl = '?tab=' + event.detail.tabID;
      window.history.pushState({}, '', pageUrl);
    }
  })
}