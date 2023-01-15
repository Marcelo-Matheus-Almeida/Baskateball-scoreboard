let scoreCasa = document.getElementById("score-casa")
let scoreVisitante = document.getElementById("score-visitante")
let pointsHome = 0
let pointsGuest = 0
var containerHome = document.getElementById("container-home")
var containerGuest = document.getElementById("container-guest")
function add1BtnHome(){
    pointsHome += 1
    scoreCasa.textContent = pointsHome
    verificarGanhador()
}

function add2BtnHome(){
    pointsHome += 2
    scoreCasa.textContent = pointsHome
    verificarGanhador()
}

function add3BtnHome(){
    pointsHome += 3
    scoreCasa.textContent = pointsHome
    verificarGanhador()
}

function add1BtnGuest(){
    pointsGuest += 1
    scoreVisitante.textContent = pointsGuest
    verificarGanhador()
}

function add2BtnGuest(){
    pointsGuest += 2
    scoreVisitante.textContent = pointsGuest
    verificarGanhador()
}

function add3BtnGuest(){
    pointsGuest += 3
    scoreVisitante.textContent = pointsGuest
    verificarGanhador()
}

function newGame(){
    pointsHome = 0
    pointsGuest = 0
    scoreCasa.textContent = 0
    scoreVisitante.textContent = 0
    containerHome.style.boxShadow = "0 0 0px #f93131";
        containerGuest.style.boxShadow = "0 0 0px #f93131";
}

function verificarGanhador(){
    if(pointsHome > pointsGuest){
        containerHome.style.boxShadow = "0 0 5px whitesmoke";
        containerGuest.style.boxShadow = "0 0 0px whitesmoke";
    }

    else if(pointsGuest > pointsHome){
        containerHome.style.boxShadow = "0 0 0px whitesmoke";
        containerGuest.style.boxShadow = "0 0 5px whitesmoke";
    }

    else {
        containerHome.style.boxShadow = "0 0 5px #f93131";
        containerGuest.style.boxShadow = "0 0 5px #f93131";
    }
}