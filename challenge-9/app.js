const closeBtn = document.querySelector('.close-btn')
const toggleBtn = document.querySelector('.toggle-btn')
const panel = document.querySelector('.panel')
const body = document.body
const menuItem = document.querySelectorAll('.menu-item')

toggleBtn.addEventListener(('click'), (e)=>{
    e.stopPropagation()
    panel.classList.add('active')
})

closeBtn.addEventListener('click', (e)=>{
    e.stopPropagation()
    panel.classList.remove('active')
})

body.addEventListener('click', ()=>{
    panel.classList.remove('active')
})

panel.addEventListener(('click'), (e)=>{
    e.stopPropagation()
})

menuItem.forEach((item)=>{
    item.addEventListener('click', ()=>{
        const result = item.innerHTML
        alert(result)
    })
})



// const togglebtn = document.querySelector(".toggle-btn");
// const pannel = document.querySelector(".panel");
// const closebtn = document.querySelector(".close-btn");
// const body = document.body;
// const menus = document.querySelectorAll('.menu-item')

// togglebtn.addEventListener("click", (event) => {
//   event.stopPropagation();
//   pannel.classList.add("active");
// });

// closebtn.addEventListener("click", (event) => {
//   event.stopPropagation();
//   pannel.classList.remove("active");
// });

// body.addEventListener("click", () => {
// //   console.log(Body Clicked);
//   pannel.classList.remove("active");
// });
// pannel.addEventListener("click", (event) => {
//   event.stopPropagation();
// });

// menus.forEach((menu, index)=>{

// menu.addEventListener('click',()=>{

//     const text = menu.innerHTML
//     alert(text)

// })

// })