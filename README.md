<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Une question ❤️</title>
</head>
<style>
    body{
    margin:0;
    overflow:hidden;
    font-family:Arial, Helvetica, sans-serif;
    background:linear-gradient(135deg,#ffb6c1,#ff69b4);
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}

#container{
    text-align:center;
}

h1{
    color:white;
}

h2{
    color:white;
}

button{

    width:140px;
    height:60px;

    font-size:22px;

    border:none;
    border-radius:15px;

    cursor:pointer;

    margin:20px;

    transition:.2s;
}

#oui{
    background:#4CAF50;
    color:white;
}

#non{
    background:#f44336;
    color:white;
    position:absolute;
}

.heart{
    position:absolute;
    font-size:35px;
    animation:fly 3s linear forwards;
}

@keyframes fly{

0%{
transform:translateY(0) scale(.5);
opacity:1;
}

100%{
transform:translateY(-900px) scale(2);
opacity:0;
}

}

.explosion{

position:absolute;
font-size:60px;
animation:boom .8s ease-out forwards;

}

@keyframes boom{

0%{
transform:scale(0);
opacity:1;
}

100%{
transform:scale(4);
opacity:0;
}

}
</style>
<body>

<div id="container">

    <h2>💌 Pour Madame SALIM</h2>

    <h1>Est-ce que tu m'aimes ? ❤️</h1>

    <div id="buttons">
        <button id="oui">OUI ❤️</button>
        <button id="non">NON 😅</button>
    </div>

</div>

<div id="hearts"></div>

<script>const non = document.getElementById("non");
const oui = document.getElementById("oui");
const hearts = document.getElementById("hearts");

function deplacerBouton(){

    const largeur = window.innerWidth - 160;
    const hauteur = window.innerHeight - 80;

    const x = Math.random()*largeur;
    const y = Math.random()*hauteur;

    non.style.left = x+"px";
    non.style.top = y+"px";
}

non.addEventListener("mouseenter",deplacerBouton);

non.addEventListener("touchstart",(e)=>{
    e.preventDefault();
    deplacerBouton();
});

oui.addEventListener("click",()=>{

document.getElementById("container").innerHTML=`
<h1>🥰 Je le savais !! ❤️</h1>

`;

for(let i=0;i<200;i++){

setTimeout(()=>{

const coeur=document.createElement("div");

coeur.className="heart";

coeur.innerHTML=Math.random()>0.5?"❤️":"💖";

coeur.style.left=Math.random()*window.innerWidth+"px";
coeur.style.top=window.innerHeight+"px";

hearts.appendChild(coeur);

setTimeout(()=>{
coeur.remove();
},3000);

},i*20);

}

for(let i=0;i<30;i++){

setTimeout(()=>{

const boom=document.createElement("div");

boom.className="explosion";

boom.innerHTML="💥❤️";

boom.style.left=Math.random()*window.innerWidth+"px";
boom.style.top=Math.random()*window.innerHeight+"px";

hearts.appendChild(boom);

setTimeout(()=>{
boom.remove();
},800);

},i*120);

}

});</script>

</body>
</html>
