function generateQRCode(url) {
  var qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + encodeURIComponent(url);
  document.getElementById("qr-code").src = qrUrl;
}

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var url = tabs[0].url;
  generateQRCode(url);
});
