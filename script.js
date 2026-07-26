const non = document.getElementById("non");
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

});