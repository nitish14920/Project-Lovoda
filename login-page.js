
var hover = document.querySelectorAll('.login-btn')
hover[0].addEventListener('mouseover',black1)
hover[1].addEventListener('mouseover', black2)
hover[0].addEventListener('mouseout',white1)
hover[1].addEventListener('mouseout',white2)
function black1() {
    var login = document.getElementById('login-btn')
    login.style.backgroundColor = 'black'
    login.style.color='white'
}
function black2() {
    var reg = document.getElementById('reg-btn')
    reg.style.backgroundColor = 'black'
    reg.style.color='white'
}
function white1() {
    var login = document.getElementById('login-btn')
    login.style.backgroundColor = 'white'
    login.style.color='black'
}
function white2() {
    var reg = document.getElementById('reg-btn')
    reg.style.backgroundColor = 'white'
    reg.style.color='black'
}


function register(e) {
    e.preventDefault()
    window.location.href = "register.html"
    console.log("hello")
}
function login(e) {
    e.preventDefault()
    var users = JSON.parse(localStorage.getItem('users'))

    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
   
     var c = 0;
    for (i = 0; i < users.length; i++){
        
        if (users[i].email == username && users[i].pass == password) {
            c++
            window.location.href="home.html"
        }
        
    }
    if (c == 0) {
        alert("Invalid")
    }
}