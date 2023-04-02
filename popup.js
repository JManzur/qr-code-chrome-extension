function generateQRCode(url) {
  var qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + encodeURIComponent(url);
  var qrImage = new Image();
  qrImage.crossOrigin = "anonymous";
  qrImage.onload = function() {
    var canvas = document.createElement("canvas");
    canvas.width = qrImage.width;
    canvas.height = qrImage.height;
    var context = canvas.getContext("2d");
    context.drawImage(qrImage, 0, 0);
    var pngUrl = canvas.toDataURL("image/png");
    document.getElementById("qr-code").src = pngUrl;
    document.getElementById("download-button").href = pngUrl;
    document.getElementById("download-button").setAttribute("download", "qrcode.png");
  };
  qrImage.src = qrUrl;
}


chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var url = tabs[0].url;
  generateQRCode(url);
});
