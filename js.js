var alea = Math.random()*100;
var essai = 10;
var condition = document.getElementById('condition');
var jouer = document.getElementById('jouer');
var champ = document.getElementById('champ');
var value = document.getElementById('value');
var hurlement = new Audio('sf_defenestration_01.mp3')
var nombre = champ.value;
var compteur = document.getElementById('compteur');
var biere = document.getElementById('bière');
var cyriak = document.getElementById('cyriak')
var pute = document.getElementById('pute')
var guitare = document.getElementById('guitare')
var clavier = document.getElementById('clavier')
var ecran = document.getElementById('ecran')

alea = Math.random()*100;
alea = Math.floor(alea);
console.log(alea);


biere.style.display = 'none';
cyriak.style.display = 'none';
pute.style.display = 'none';
guitare.style.display = 'none';
clavier.style.display = 'none';
ecran.style.display = 'none';

function affichage() {

    if (alea > 0 && alea < 10){
        biere.style.display = 'block'
    }

    else if (alea === 0){
        cyriak.style.display = 'block';
        alert('ARRETEEZ DE VOUS FOUTRE DE MA GUEULE !!');
        alert('J ARRIVE !!!!!!');
        alert('DEMAIN !!!!!!');
        alert('JAMAIS SANS MA BOMBE LACRIMO');
        alert('LE CLIENT C EST MOI ET PERSONNE D AUTRE !!!');
        alert('LE RESPECT ET UN REPAS QUI SE MANGE FROID');
        alert('ASSURER LE SERVICE DERRIERE');
        alert('JE NE SUIS PAS LACHE JE SUIS SEULEMENT INTELLIGENT');
    }

    else if (alea > 50 && alea <= 60){
        pute.style.display = 'block'
    }

    else if (alea > 61 && alea <= 80){
        guitare.style.display = 'block'
    }

    else if (alea >= 10 && alea <= 49){
        clavier.style.display = 'block'
    }

    else if (alea > 79 && alea <= 100){
        ecran.style.display = 'block'
    }

}

affichage()


jouer.addEventListener('click', function () {

    var nombre = champ.value;
    compteur.innerHTML = essai + '/10';
    essai = essai - 1;
    value.innerHTML += nombre+ '€ ';
    console.log(essai);

    if (nombre > alea)
    {
            condition.innerHTML = 'C EST MOINS!';
            console.log(value)
    }
    else if (nombre < alea)
    {

        condition.innerHTML = 'C EST PLUS!';
        console.log(value)
    }

    else if  (nombre == alea)
    {
        alert('VOUS ETES UN WINNER');
        alea = Math.random()*100;
        alea = Math.floor(alea);
        console.log(alea);
        essai = 10;
    }

    if (essai === 0)
    {
        alert('PERDU VOUS ETES 0');
        alea = Math.random()*100;
        alea = Math.floor(alea);
        console.log(alea)
        essai = 10;
        compteur.innerHTML = 10;
        value.innerHTML = '';

    }

});




