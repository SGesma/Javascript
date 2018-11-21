'use strict'

// TRAITEMENT DU NOM
var nom = document.querySelector("#nom");
console.log(nom)
nom.addEventListener('blur', function () {
    if (this.value.length >= 2 && this.value.length  <= 30) {
        console.log('OK');
        this.style.backgroundColor = "green";
    } else {
        console.log('Pas bon !');
        this.style.backgroundColor = "red";
        alert('WHAT ??? TELL ME')
    }
});

// TRAITEMENT DU PRENOM
var prenom = document.querySelector("#prenom");
prenom.addEventListener('blur', function () {
    if (this.value.length >= 2 && this.value.length <= 15) {
        console.log('OK');
        this.style.backgroundColor = "green";
    } else {
        console.log('Pas bon !');
        this.style.backgroundColor = "red";
        alert('HUM PLEASE WHO ARE YOU ?')
    }
});

// TRAITEMENT DU EMAIL
var email = document.querySelector("#email");
email.addEventListener('blur', function () {
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    var emailValue = this.value;
    if (regex.test(this.value)) {
        console.log('OK');
        this.style.backgroundColor = "green";
    } else {
        console.log('Pas bon !');
        this.style.backgroundColor = "red";
        alert('GUY DON T MAKE THAT')
    }
});

// TRAITEMENT DE L'AGE
var age = document.querySelector("#age");
age.addEventListener('blur', function (){
var ageValue = this.value
    if ( ageValue > 18 && ageValue < 100 && !isNaN(ageValue)) {
        console.log('OK');
        this.style.backgroundColor = "green";
    } else {
        console.log('Pas bon !');
        this.style.backgroundColor = "red";
    }
});

// INFORMATIONS A TRAITER
// on crée un objet users avec tout mes paramètres de formulaire
function Users (nom, prenom, email, age){
    this.nom = nom
    this.prenom = prenom
    this.email = email
    this.age = age
}


var bouton_envoi = document.querySelector("#bouton_envoi");
bouton_envoi.addEventListener('click', function(){

// Je teste si mon style de champ et le fond est vert alors 
// on crée une variable personne avec l'objet Users (ma fonction)
// on mets en paramètres mes valeurs pour chaque traitement
if (nom.style.backgroundColor == "green" && prenom.style.backgroundColor == "green" && email.style.backgroundColor == "green" && age.style.backgroundColor == "green"){
    var person = new Users(nom.value, prenom.value, email.value, age.value)
    console.log(person)
}
})

var div = document.querySelector("#personne");
div.setAttribute('id', function(Users){
    var content = `
                   
                `;

    div.innerHTML = content;
})



    

