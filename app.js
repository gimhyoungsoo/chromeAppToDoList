const loginInput = document.querySelector("#login-form input")
const loginButton = document.querySelector("#login-form button")
const sPlaceholder = loginInput.value

function onLoginBtnClick() {
    const sName = loginInput.value
    if(sName == sPlaceholder){
        console.log("please enter your name :)")
    }else{
        console.log('hello ' + sName)
    }
    
}

function onLogInInputKeyPress(evt){
    var code = evt.which?evt.which:event.keyCode;
    if(code == 13 ){
        onLoginBtnClick()
    }
}

loginButton.addEventListener("click",onLoginBtnClick)
loginInput.addEventListener("keydown",onLogInInputKeyPress)