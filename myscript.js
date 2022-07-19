

function messageSent() {
    alert("Ju Faleminderit qe kontaktuat me ne!");
}

/*Shadow fade Product*/
const produktetItems = document.querySelectorAll('.produkti');

produktetItems.forEach(produkti => {
    produkti.addEventListener('mouseover', () => {
        produkti.childNodes[1].classList.add('img-darken');
    });
    produkti.addEventListener('mouseout', () => {
        produkti.childNodes[1].classList.remove('img-darken');
    });
});


/*Btn Increment
var x = parseInt(document.getElementById('inptBtn').value) ; 

function plus(){
    ++x;
    document.getElementById('inptBtn').value = x;
}
min = 0;
function minus(){
    --x;
    if(x==min){
        ++x;
    }
    document.getElementById('inptBtn').value = x;
}


x = parseInt(document.getElementById('inptBtn').value);

const Increment = document.querySelectorAll('#btnPlus');

Increment.forEach(buttonInc => {

    buttonInc.addEventListener('click', () => {
        parseInt(document.getElementById('inptBtn').value++);
    });
});

const Decrement = document.querySelectorAll('#btnMinus');

Decrement.forEach(buttonDec => {

    buttonDec.addEventListener('click', () => {

        if(parseInt(document.getElementById('inptBtn').value--)<0){
            parseInt(document.getElementById('inptBtn').value)=1;
        }
        else{
            parseInt(document.getElementById('inptBtn').value--);
        }

    });
});

let addBtn = document.querySelectorAll('#btnPlus');
let subBtn = document.querySelectorAll('#btnMinus');
let qty = document.querySelectorAll('.inpIncrm');

addBtn.addEventListener('click', () => {
    qty.value = parseInt(qty.value)+1;
});

*/
//Increment num
var incButton = document.getElementsByClassName('inc');
var decButton = document.getElementsByClassName('dec');

//console.log(incButton);
//console.log(decButton);

for(i=0; i<incButton.length;i++){
    var button = incButton[i];
    button.addEventListener('click',function(event){
        var buttonClicked = event.target;
        //console.log(buttonClicked);
        var input = buttonClicked.parentElement.children[2];
        //console.log(input);
        var inputValue = input.value;
        //console.log(inputValue);
        var newValue = parseInt(inputValue) + 1;
        //console.log(newValue);
        input.value = newValue;

    });
}
//decrement num
for(i=0; i<decButton.length;i++){
    var button = decButton[i];
    button.addEventListener('click',function(event){
        var buttonClicked = event.target;
        //console.log(buttonClicked);
        var input = buttonClicked.parentElement.children[2];
        //console.log(input);
        var inputValue = input.value;
        //console.log(inputValue);
        var newValue = parseInt(inputValue) - 1;
        //console.log(newValue);
        if(newValue >1){
            input.value = newValue;
        }else{
            input.value = 1;
        }
    });
}




/*
const btnResponse = document.querySelectorAll('.button');

btnResponse.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.add('btn.response');
        btn.childNodes[3].classList.add('btn-response');
    });
});
*/