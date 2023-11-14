const eyeDropper = new EyeDropper();

let colorHexValue=0

async function eyedropper(){
    const result = await eyeDropper.open();

    // The user selected a pixel, here is its color:
    colorHexValue = result.sRGBHex;
    console.log(colorHexValue)
}

console.log(colorHexValue)