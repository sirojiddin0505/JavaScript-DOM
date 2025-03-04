// let text = document.getElementById("text");
// text.textContent = "salom"
// console.log(text.textContent);
// let text = document.getElementsByClassName("texts");
// text.textContent = "salom"
// console.log(text.textContent);

// let text = document.getElementById("text");
// let submit = document.getElementById("btn");
// btn.addEventListener("click", function(){
//     text.classList.add("text-color")
// })

// UYGA VAZIFA
// 1
let text = document.getElementById("text");
let btn = document.getElementById("btn");
btn.addEventListener('click', function(){
    text.classList.add("color")
})
text.addEventListener("click", function(){
    btn.classList.add("btn")
})


// 2
