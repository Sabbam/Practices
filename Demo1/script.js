function generateQRCode() {
    const fileInput = document.getElementById("fileInput");
    const qrcodeContainer = document.getElementById("qrcodeContainer");
    const qrcodeElement = document.getElementById("qrcode");
    const downloadLink = document.getElementById("downloadLink");
  
    if (!fileInput.files.length) {
      alert("Please select a file first.");
      return;
    }
  
    const file = fileInput.files[0];
    const blobURL = URL.createObjectURL(file);
  
    // Clear old QR code
    qrcodeElement.innerHTML = "";
  
    // Generate QR code
    QRCode.toCanvas(blobURL, { width: 256 }, function (error, canvas) {
      if (error) {
        console.error(error);
        alert("Failed to generate QR code.");
        return;
      }
      qrcodeElement.appendChild(canvas);
      downloadLink.href = blobURL;
      downloadLink.download = file.name;
      qrcodeContainer.classList.remove("hidden");
    });
  }
  