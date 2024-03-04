let imgBox = document.getElementById("imgBox");
    let qrImg = document.getElementById("qrImage");
    let qrText = document.getElementById("qrText");

    function generateQr() {
        if (qrText.value.length > 0) {
            qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + encodeURIComponent(qrText.value);
            imgBox.classList.add("show-img");
            console.log("QR code generated successfully.");
        } else {
            qrText.classList.add('error');
            setTimeout(() => { qrText.classList.remove('error') }, 1000);
            console.log("QR code generation failed: Empty input.");
        }
    }