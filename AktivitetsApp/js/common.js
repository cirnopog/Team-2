function createHeader(){
let html = /*HTML*/`
 <header>
       <h1>Activly</h1> 
    
       <div>
            <p>
                <a href="categories.html">Kategorier</a>
            </p>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" id="search">
            <p>
                <a href="login.html">Logg inn</a>
            </p>
        </div>
    </header>

`;
document.body.insertAdjacentHTML("afterbegin", html);
}
createHeader()
