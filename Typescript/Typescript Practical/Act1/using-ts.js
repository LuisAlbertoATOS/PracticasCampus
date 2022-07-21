var button = document.querySelector("button");
var input1 = document.getElementById("num1");
// the ! sign means will always find element
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    // the + before the input.value converts it to number
    console.log(add(+input1.value, +input2.value));
});
