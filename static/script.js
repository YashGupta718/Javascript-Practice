function ageInDays(){
    var dob = prompt('What is your DOB brotha?');
    var age = (2021 - dob)*365;
    console.log(age);
    var h1 = document.createElement('h1');
    var textAns = document.createTextNode('You are ' + age + ' days old.');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAns);
    document.getElementById('flexResult').appendChild(h1);
}

function reset(){
    console.log("RESET");
    document.getElementById('ageInDays').remove() ;
}