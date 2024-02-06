let size = parseInt(prompt("Enter the size of the array"));
while (isNaN(size)) {
  alert(`Please enter the correct size`);
  size = parseInt(prompt("Enter the size of the array"));
}
let arr = [];
for (let i = 0; i < size; i++) {
  let element = prompt(`Enter the contents of element number ${i + 1}`);
  arr.push(element);
}
function compareNumbers(a, b) { // взял с сайта
  return a - b;
}

document.write(`<p>${arr}</p>`);
arr.sort(compareNumbers);
document.write(`<p>${arr}</p>`);
arr.splice(1, 3);
document.write(`<p>${arr}</p>`);
