let app = document.getElementById("app")
function showLoginPage(){

    app.innerHTML=`
    <div id="head">Logg inn eller Registrer deg</div>
    <label id="usernamelabel" for="username">Brukernavn</label>
    <input type="text" id="username" name="username"/>
    <label id="passwordlabel" for="password">Passord</label>
    <input type="password" id="password" name="password"/>
    <button id="loginButton" onclick="login()">Logg Inn</button>
    <button id="registerButton" onclick="register()">Registrer</button>`
}