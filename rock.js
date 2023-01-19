// rock beats scissors
// scissors beats paper
// paper beats rock
choice = ['rock','paper','scissors']
value = 0
computer = ''

statsss = {
    player: 0,
    comp: 0,
    draws: 0
}

const scoress = JSON.parse(localStorage.getItem("Scores"))
    
if (scoress) {
    
    statsss.player = scoress.player
    statsss.draws = scoress.draws
    statsss.comp = scoress.comp
    play()
    document.getElementById('results').textContent = "STREAKSSS!!!"
    
}

document.getElementById('clearbtn').addEventListener('dblclick',function () 
{
    localStorage.clear()
    statsss = {
        player: 0,
        comp: 0,
        draws: 0
    }
    document.getElementById('results').textContent = "Let's Do This"
    document.getElementById('player').textContent = statsss.player
    document.getElementById('draw').textContent = statsss.comp
    document.getElementById('comp').textContent = statsss.draws
})

player = {
    pick1: document.getElementById('rock').addEventListener('click',function () {
        value = 'rock'
        computer = choice[Math.floor((Math.random()*3))]
        play()
    }),
    pick2: document.getElementById('paper').addEventListener('click',function () {
        value = 'paper'
        computer = choice[Math.floor((Math.random()*3))]
        play()
    }),
    
    pick3: document.getElementById('scissors').addEventListener('click',function () {
        value = 'scissors'
        computer = choice[Math.floor((Math.random()*3))]
        play()
    })
   
}
function play() 
{
    if (value === 'rock' ){
        if (computer === 'paper') {
           results = "snooze you loose"
        }
        else if (computer === 'rock') {
           results = "Dang it!! issa draw"
        }
        else
        {
           results = "aight! aight, you WIN"
        }
    }
    if (value === 'paper' ){
        if (computer === 'scissors') {
           results = "snooze you loose"
        }
        else if (computer === 'paper') {
           results = "Dang it!! issa draw"
        }
        else
        {
           results = "aight! aight, you WIN"
        }
    }
    if (value === 'scissors' ){
        if (computer === 'rock') {
           results = "snooze you loose"
        }
        else if (computer === 'scissors') {
           results = "Dang it!! issa draw"
        }
        else
        {
           results = "aight! aight, you WIN"
        }
    }
    if (results === "aight! aight, you WIN") {
        statsss.player += 1
        
    }
    else if (results === "snooze you loose") {
        statsss.comp += 1
    } 
    else  if (results === "Dang it!! issa draw")
    {
        statsss.draws += 1
    }
    localStorage.setItem("Scores", JSON.stringify(statsss))
    document.getElementById('results').textContent = results
    document.getElementById('compsPick').textContent = "Computer Picked: " + computer
    document.getElementById('player').textContent = " " + statsss.player
    document.getElementById('comp').textContent = " " + statsss.comp
    document.getElementById('draw').textContent = " " + statsss.draws
    console.log("computer picked: " + computer)
    console.log(statsss.comp)
    console.log(statsss.player)
    console.log(statsss.draws)
}