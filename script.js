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

// let text = document.getElementById("text");
// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// btn1.addEventListener("click", function(){
//     text.style.color = "blue"
// })
// btn2.addEventListener("click", function(){
//     text.style.color = 'red'

// })

// yangi element qo'shish👇

// let navList = document.getElementById('nav__list')
// let navItem = document.createElement('li')
// navItem.textContent = 'salom'
// navList.appendChild(navItem)


// funksiya yaratish👇

// function hour(){
//     alert("soat 12 bo'ldi")
// }
// let btn = document.getElementById('btn')
// btn.style.padding = "15px"
// btn.style.fontSize = "25px"


// soat yaratish👇

// let hour = document.getElementById('hour')

// function getHours(){
//     let date = new Date()
//     hour.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds().toString().padStart(2, "0")}`
//     setInterval(()=>getHours(), 100)
// }
// getHours()


// input va button orqali ishlash👇

// let textList = document.getElementById('textList')
// let input = document.getElementById('input')

// function Submit(){
//     let li = document.createElement('li')
//     let deleteBtn = document.createElement('button')
//     deleteBtn.textContent = '❌'
//     deleteBtn.classList.add("deletebtn")
//     deleteBtn.onclick = function(){
//         li.remove()
//     }
//     li.textContent = input.value;
//     li.appendChild(deleteBtn)
//     textList.appendChild(li)
//     input.value = ''
// }


// homework
// 1
// let ul = document.getElementById("ul")
// let li = document.createElement('li')
// li.textContent = "dasturlash"
// ul.appendChild(li)




// let name = document.getElementById('name')
// let email = document.getElementById('email')
// let myForm = document.getElementById('myForm')
// email.classList.add('input')
// name.classList.add('input')


// myForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log(name.value,email.value);  
//     myForm.reset()
// })


// humMenu👇

// let button = document.getElementById('btn')
// let hum = document.querySelector('.humMenu')
// button.addEventListener('click', function(e){
//     hum.classList.toggle('menu')
// })





// uyga vazifa

// 1
// let input = document.getElementById('input')
// let list = document.getElementById('inp--list')
// let btn = document.getElementById('btn')
// btn.classList.add('style')

// function SendMessage(){
//     let li = document.createElement('li')
//     let clear = document.createElement('button')
//     clear.textContent = 'clear'
//     clear.onclick = function(){
//         li.remove()
//     }
//     clear.classList.add('clear')
//     li.textContent = input.value;
//     li.appendChild(clear)
//     list.appendChild(li)
//     input.value = ''
// }
// input.addEventListener('keydown', function(e){
//     if(e.key === 'Enter'){
//         SendMessage()
//     }
// })


// 2
// let form = document.getElementById('form')
// let inp = document.getElementById('form__inp')
// let inps = document.getElementById('forms__inp')
// form.addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log(inp.value, inps.value);
//     form.reset()
// })


// 3
// let btn = document.getElementById('humBtn')
// let humMenu = document.querySelector('.humMenu')

// btn.addEventListener('click', function(e){
//     humMenu.classList.toggle('humMenu')
// })


// 4 kalkulyator 
let teng = document.getElementById('teng')

function tenglik(e){
    teng.value += e
}
function qoshish(){
    teng.value = eval(teng.value) 
}

