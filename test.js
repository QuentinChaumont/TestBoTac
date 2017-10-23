var today = new Date();
var tomorrow = new Date();

var tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");

tomorrow.setDate(today.getDate()+40);

console.log(tab_jour[tomorrow.getDay()]+" "+ tomorrow.getDate());
