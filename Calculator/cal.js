var screen = document.querySelector('.screen');
var buttons = document.querySelectorAll('.btn');
var clear = document.querySelector('.clear');
var equal = document.querySelector('.equal');

buttons.forEach(function (button){
    button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        screen.value +=value;
    })
})

equal.addEventListener('click', function(e){
    if(screen.value === ''){
        screen.value = "error";
    }else{
        answer =eval(screen.value);
        screen.value = answer;
    }
})

clear.addEventListener('click', function(e){
    screen.value = "";
})