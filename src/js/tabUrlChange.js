export default function() {
  document.documentElement.addEventListener('tabchange', function(event) {
    const tabname = event.detail.tabID
    const hash = window.location.hash
    console.log(`Window hash ${hash}`)
    if (tabname && tabname !== '') {
      let pageUrl = '?tab=' + event.detail.tabID;
      window.history.replaceState({}, '', pageUrl);
      if (hash) {
        window.location.hash = hash
      }
    }
  })
}