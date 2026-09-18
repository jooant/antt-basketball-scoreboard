let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")
let periodEl = document.getElementById("period-el")

let sumHome = 0
let sumAway = 0
let sumPeriod = 0

function add1Home()
{
    sumHome += 1
    homeScore.textContent = sumHome;
}

function add2Home()
{
    sumHome += 2
    homeScore.textContent = sumHome;
}

function add3Home()
{
    sumHome += 3
    homeScore.textContent = sumHome;
}

function add1Away()
{
    sumAway += 1
    awayScore.textContent = sumAway;
}

function add2Away()
{
    sumAway += 2
    awayScore.textContent = sumAway;
}

function add3Away()
{
    sumAway += 3
    awayScore.textContent = sumAway;
}

function addPeriod(){
    if(sumPeriod == 4){
        sumPeriod = 0
        periodEl.textContent = sumPeriod
    }
    else{
        sumPeriod += 1
        periodEl.textContent = sumPeriod
    }
    
}

function reset(){
    sumHome = 0
    sumAway = 0
    sumPeriod = 0
    homeScore.textContent = sumHome
    awayScore.textContent = sumAway
    periodEl.textContent = sumPeriod
}