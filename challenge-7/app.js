const accordionButton = document.querySelectorAll('.accordion-button')
const accordionContent = document.querySelectorAll('.accordion-content')
const accordionItem = document.querySelectorAll('.accordion-item')

accordionButton.forEach((btn, index)=>{
   btn.addEventListener(('click'), (e)=>{
    // console.log(accordionContent[0].innerText)
    

        const isActive  = accordionItem[index].classList.contains("active")
        accordionItem.forEach((elemnt)=>{
            elemnt.classList.remove('active')
        })
        if (!isActive) {
            accordionItem[index].classList.add('active')
        }
     
   })
})

