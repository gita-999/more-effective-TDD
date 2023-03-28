
function unitConversion(inputNum, inputType, outType) {
    let outNumb
    if(inputType === 'yard' && outType === "foot") {
        outNumb = inputNum * 3
    }
    return outNumb + outType
}

module.exports = unitConversion

enum unitConversionType {
    .yard,
    .foot,
    .aaa
}