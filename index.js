let count_home = 0
let count_guest = 0
let homeScore = document.getElementById("score-home")
let guestScore = document.getElementById("score-guest")

function add1_home() {
    count_home += 1
    homeScore.innerHTML = count_home
}

function add2_home() {
    count_home += 2
    homeScore.innerHTML = count_home
}

function add3_home() {
    count_home += 3
    homeScore.innerHTML = count_home
}

function add1_guest() {
    count_guest += 1
    guestScore.innerHTML = count_guest
}

function add2_guest() {
    count_guest += 2
    guestScore.innerHTML = count_guest
}

function add3_guest() {
    count_guest += 3
    guestScore.innerHTML = count_guest
}

function new_game() {
    count_guest = 0
    guestScore.innerHTML = count_guest
    count_home = 0
    homeScore.innerHTML = count_home

}