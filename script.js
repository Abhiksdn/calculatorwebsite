let inputbox = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let string = '';

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
        //alert(event.target.innerText);
        if(event.target.innerText=='='){
            string = String(eval(string));
            input.value=string;
        }
        else if(event.target.innerText=='AC'){
            string='';
            if(string==''){
           input.value='0';
            }
        }
        else if(event.target.innerText=='DEL'){
            string=string.substring(0,string.length-1);
           input.value=string;
           if(input.value==0){
            input.value='0';
           }
        }
        else if(event.target.id=='plusminus'){
            string=String(-eval(string));
            input.value=string;
        }
        else{
            string+=event.target.innerText;
            input.value=string;
        }
      
    });
}