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
                <a href="login.html">${model.app.currentUser==null?"Logg inn":
            `<img class="user-profile-pic" src="${model.app.currentUser.img}" width="20px" alt="">`}</a>
            </p>
        </div>
    </header>

`;
document.body.insertAdjacentHTML("afterbegin", html);
}
createHeader()
