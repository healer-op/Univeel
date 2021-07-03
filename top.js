//api fetcher by healer op
fetch('https://raw.githubusercontent.com/healer-op/Baltop/main/api.json')
.then(res=> res.json())
.then(data => {
    console.log(data.Survival);
    const html = data.Survival.player_name.map(user =>{
    return `
    <div class="gg">
    <p class="img"><img src="http://cravatar.eu/head/${user}/128.png" width="128px" alt="logo"></p>
    <p class="name">${user}</p>
    </div>`;
}).join('');
document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
}).catch(error =>{
console.log(error);
});
var made = "Made By Healer";
console.log(made);
//change the code not credits