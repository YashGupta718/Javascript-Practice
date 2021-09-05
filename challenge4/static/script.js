//Challenge4 : Change button color
let allButton = document.getElementsByTagName('button');
//console.log(allButton);
let copyButtons = [];
var n = allButton.length;
for(let i=0; i<n; ++i){
    copyButtons.push(allButton[i].classList[1]);
}
//console.log(copyButtons);

function buttonColorChange(buttonThingy){
    //console.log(buttonThingy.value);
    if(buttonThingy.value == 'red'){
        buttonRed();
    }
    else if(buttonThingy.value == 'green'){
        buttonGreen();
    }
    else if(buttonThingy.value == 'reset'){
        buttonReset();
    }
    else if(buttonThingy.value == 'random'){
        buttonRandom();
    }
}

function buttonRed(){
    for(i=0 ; i<n ; ++i){
        allButton[i].classList.remove(allButton[i].classList[1]);  
        allButton[i].classList.add('btn-danger');     
    }
}

function buttonGreen(){
    for(i=0 ; i<n ; ++i){
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add('btn-success');
    }
}

function buttonRandom(){
    var rnum ;
    for(i=0 ; i<n ; ++i){
        rnum = Math.floor(Math.random()*n);
        var btnData = {
            '0': 'btn-primary',
            '1': 'btn-danger',
            '2': 'btn-warning',
            '3': 'btn-success'
        }
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add(btnData[rnum]);
    }
}

function buttonReset(){
    for(i=0 ; i<n ; ++i){
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add(copyButtons[i]);
    }
}