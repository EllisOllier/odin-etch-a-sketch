let slider = document.getElementById("drawing-size");
let output = document.getElementById("output");
output.innerText = slider.value;

slider.oninput= function() {
    output.innerText = slider.value;
}