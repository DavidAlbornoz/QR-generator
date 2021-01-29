const fs = require("fs")
const qrcode = require("qrcode");
const { runInContext } = require('vm');

//const urlSPIKA="http://www.blitzfud.works/home";
const urlSPIKA="https://res.cloudinary.com/back-cadenillas/image/upload/v1608696889/Cadenillas/Dayanne3_meoe8d.jpg";

const run = async()=> {
    const QR = await qrcode.toDataURL(urlSPIKA)
    const htmlContent = `
    <div styles = "display: flex: justify-content: center: align-items: center:">
    <h2> Link spika </h2>
    <img src="${QR}">
    </div>
    `;
    fs.writeFileSync('./index.html', `${htmlContent}`)
}

run()