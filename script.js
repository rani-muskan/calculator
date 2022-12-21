


let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenvalue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttontext = e.target.innerText;
        console.log('the button text was', buttontext);
        if(buttontext == 'x'){
            buttontext = '*';
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
        else if(buttontext == 'D'){
            buttontext = '';
            screenvalue = screen.value.substring(0,screen.value.length-1);
            screen.value = screenvalue;
        }
      
        else if(buttontext == 'C'){
            screenvalue = "";
            screen.value = screenvalue;
            
        }
        else if(buttontext == '='){
            screen.value = eval(screenvalue)
        }
        else{
            screenvalue += buttontext;
            screen.value = screenvalue;
        }

})
}


