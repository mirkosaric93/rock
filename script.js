let randomNum = Number(Math.random()*2).toFixed(0);
let images = document.querySelectorAll('span img');
let image = images[randomNum].getAttribute('name');

function showName(){
    let spans = document.querySelectorAll('span');
    let singleSpan = spans[randomNum];
    singleSpan.classList.add('comp');
}
function disableBtn(){
    let btns = document.querySelectorAll('.btn');
    btns.forEach(btn =>{
        btn.disabled = true;
        btn.style.cursor = 'default';
    });
}

let reloadBtn = document.querySelector('#reload');
reloadBtn.addEventListener('click', function(){
    window.location.reload()
})

let buttons = document.querySelectorAll('button');
buttons.forEach(e=>{
    e.addEventListener('click', function(btn){
        const currentBtn = btn.target;
        let btnName = currentBtn.getAttribute('name')

        let parentBtn = currentBtn.parentElement;
        parentBtn.classList.add('moved');
        let result = document.querySelector('.result');
        let paragraph = document.createElement('p');
        showName()
        disableBtn()
        function player(){
            paragraph.innerText = 'Player WIN!';
            result.appendChild(paragraph);
        };
        function computer(){
            paragraph.innerText = 'Computer WIN!';
            result.appendChild(paragraph);
        }
        
        if(btnName === image){
            paragraph.innerText = 'TIE!';
            result.appendChild(paragraph)
        }else if(btnName === 'rock'){
            if(image === 'paper'){
                return computer();
            }
            player();
        }else if(btnName === 'paper'){
            if(image === 'scissors'){
                return computer();
            }
            player();
        }else if(btnName === 'scissors'){
            if(image === 'rock'){
                return computer();
            }
            player();
        }
    })
});