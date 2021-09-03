function rpsGame(yourChoice){
    console.log(yourChoice.id);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = textchoice(randnum());
    var result = decideWinner(humanChoice,botChoice);
    console.log(result);
    var message = finalMessage(result);
    console.log(message);

    // All internal work is done,
    // now its time for external work to show the changes.
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randnum(){
    return Math.floor(Math.random()*3);
}

function textchoice(num){
    var choices = ['rock', 'paper', 'scissors'][num];
    console.log(choices);
    return choices;
}

function decideWinner(humanChoice,botChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},        // IF Else can also be used
        'paper': {'scissors': 0, 'rock': 1, 'paper': 0.5},       // but this way is clearly more
        'scissors': {'scissors': 0.5, 'rock': 0, 'paper': 1},    // easy to write
    }
    var score = rpsDatabase[humanChoice][botChoice];
    return score;
}

function finalMessage(result){
    var msgData = {
        '1' : {'msg': 'You Won', 'color': 'chartreuse'},            //// IF Else can also be used
        '0.5': {'msg': 'You Tied', 'color': 'orange'},
        '0': {'msg': 'You Lost', 'color': 'crimson'}
    };

    return msgData[result];
}

function rpsFrontEnd(yourChoice,botChoice,message){
    console.log(yourChoice);
    console.log(botChoice);
    console.log(message.msg);
    frontEndData = {
       'rock': document.getElementById('rock').src,
       'paper': document.getElementById('paper').src,
       'scissors': document.getElementById('scissors').src
    };

    //Remove images from screen
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humandiv = document.createElement('div');
    var msgdiv = document.createElement('div');
    var botdiv = document.createElement('div');

    humandiv.innerHTML = "<img src='" + frontEndData[yourChoice]  +"' height=180 style='box-shadow: 10px 10px 25px rgba(37,50,233,1)!important;'>"
    msgdiv.innerHTML = "<h1 style='color: "+ message['color']+ "; font-sixe: 60px; padding:30px; '>" + message['msg'] +"</h1>";
    botdiv.innerHTML = "<img src='" + frontEndData[botChoice] + "' height=180 style='box-shadow: 10px 10px 25px rgba(200,30,23,1)!important;'>"

    document.getElementById('flexBox-rps-id-div').appendChild(humandiv);
    document.getElementById('flexBox-rps-id-div').appendChild(msgdiv);
    document.getElementById('flexBox-rps-id-div').appendChild(botdiv);
}