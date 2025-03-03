const bulb = document.getElementById('bulb')
const btn = document.getElementById('toggleButton')
const statusText = document.querySelector('.switch-status') 


    btn.addEventListener('click', (e)=>{
        if(bulb.classList.contains('off')){
            bulb.classList.remove('off')
            document.body.style.backgroundColor = '#333';
            statusText.innerText = 'Status : On'
            document.body.style.color = '#fff'
            
        }else{
            bulb.classList.add('off')
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#000'
            statusText.innerText = 'Status : Off'
            btn.innerText = 'Turn On'
        }
    })



