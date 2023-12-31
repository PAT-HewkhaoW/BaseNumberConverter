var display = document.getElementById("display");
var binaryInput = document.getElementById("binaryInput").value;
display.innerHTML = opt.toString();

// function ConvertBinaryToDecimal(binary) {
//   result = 0;
//   const inputBinary = binary.split("");
//   const outputDecimla = [];

//   for (let i = 0; i < inputBinary.length; i++) {}

//   for (let i = 0; i < array.length; i++) {}
//   return result;
// }

function toDecimal(binaryInput) {
  let binary = "";
  if (typeof binaryInput == "string") {
    binary = binaryInput.split();
  } else {
    binary = binaryInput.toString().split();
  }
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    decimal = decimal * 2 + binary[i];
  }
  display.innerHTML = decimal.toString();
}

console.log();
