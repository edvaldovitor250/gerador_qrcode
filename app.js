const generateBtn = document.querySelector("#generate-btn");
const qrCodeDiv = document.querySelector("#qr-code");

generateBtn.addEventListener("click", () => {
    const qrText = document.querySelector("#qr-text").value;

    if (qrText) {
        qrCodeDiv.innerHTML = "";
        const qrCode = new QRCode(qrCodeDiv, qrText);
    }
});
