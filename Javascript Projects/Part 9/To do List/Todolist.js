let arr = [];
let a = document.querySelector(".Tasks");
let display = document.querySelector(".display1");

document.querySelector(".clickk").addEventListener("click", () => {
    console.log(a.value);
    arr.push(a.value);
    let create1 = document.createElement("p");
    create1.innerHTML = a.value; // Use a.value before resetting it
    display.appendChild(create1); // Append create1
    a.value = ""; // Reset the input field after using its value
    console.log(arr);
});
