/**
 * Write your challenge solution here
 */
const heading = document.getElementById('mainHeading')
const redColorBtn = document.getElementById('redButton')
const greenColorBtn = document.getElementById('greenButton')
const blueColorBtn = document.getElementById('blueButton')
const purpleColorBtn = document.getElementById('purpleButton')
const resetColorBtn = document.getElementById('resetButton')

redColorBtn.addEventListener(('click'), ()=>{
    heading.style.color = '#e74c3c'
})

greenColorBtn.addEventListener(('click'), ()=>{
    heading.style.color = '#2ecc71'
})

blueColorBtn.addEventListener(('click'), ()=>{
    heading.style.color = '#3498db'
})

purpleColorBtn.addEventListener(('click'), ()=>{
    heading.style.color = '#9b59b6'
})

resetColorBtn.addEventListener(('click'), ()=>{
    heading.style.color = '#34495e'
})
