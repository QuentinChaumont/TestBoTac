var today = new Date();
var today2 = new Date();
today2.setDate(today.getDate()+2);
var today3 = new Date();
today3.setDate(today.getDate()+3);
var today4 = new Date();
today4.setDate(today.getDate()+4);
var today5 = new Date();
today5.setDate(today.getDate()+5);

const name = "petit singe";
const tab_jour = new Array("Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam");


exports.textMenu = "Alors, qu'est-ce qu'on fait " + name + " ??";
exports.textDefault = "🤷‍ Oupssi, pas compris ce que t'as dit... Pas de panique je m'améliore de jour en jour 💪  Pour contacter mes créateurs c'est ici que ça se passe : contact@maitika.com";
exports.quickMenu = [
  {
    content_type:"text",
    title:"Sortir",
    payload:""
  },
  {
    content_type:"text",
    title:"Boire",
    payload:""
  },
  {
    content_type:"text",
    title:"Manger",
    payload:""
  },
  {
    content_type:"text",
    title:"Promo",
    payload:""
  },
  {
    content_type:"text",
    title:"Blog",
    payload:""
  },
  {
    content_type:"text",
    title:"Découvrir",
    payload:""
  },
  {
    content_type:"text",
    title:"Paramètres",
    payload:""
  }
];


exports.textSortir = 'Quand est-ce qu\'on s\'bouge '+ name + " ??";
exports.quickSortir = [
  {
    content_type:"text",
    title:"Aujourd'hui",
    payload:""
  },
  {
    content_type:"text",
    title:"Demain",
    payload:""
  },
  {
    content_type:"text",
    title: tab_jour[today2.getDay()]+" "+ today2.getDate(),
    payload:""
  },
  {
    content_type:"text",
    title:tab_jour[today3.getDay()]+" "+ today3.getDate(),
    payload:""
  },
  {
    content_type:"text",
    title:tab_jour[today4.getDay()]+" "+ today4.getDate(),
    payload:""
  },
  {
    content_type:"text",
    title:tab_jour[today5.getDay()]+" "+ today5.getDate(),
    payload:""
  },
  {
    content_type:"text",
    title:"Paramètres",
    payload:""
  }
];
