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
const quickMenu = [
  {
    content_type:"text",
    title:"📅 Sortir",
    payload:""
  },
  {
    content_type:"text",
    title:"💧 Boire",
    payload:""
  },
  {
    content_type:"text",
    title:"🍖 Manger",
    payload:""
  },
  {
    content_type:"text",
    title:"💰 Promo",
    payload:""
  },
  {
    content_type:"text",
    title:"📚 Blog",
    payload:""
  },
  {
    content_type:"text",
    title:"🔮 Découvrir",
    payload:""
  },
  {
    content_type:"text",
    title:"⚙️ Paramètres",
    payload:""
  }
];
exports.quickMenu = quickMenu;

exports.textSortir = 'Quand est-ce qu\'on s\'bouge '+ name + " ??";
exports.quickSortir = [

  {
    content_type:"text",
    title:"Halloween 👻", //Il faudra faire un appel spécial ici pour l'event spécial
    payload:"SortieSpecial"
  },
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
    title:"Menu",
    payload:""
  }
];

exports.textBoire = "Pour savoir qu'un verre était de trop, encore faut-il l'avoir bu ! 🍻";

exports.messageSpecial =
{
"quick_replies": quickMenu,
"attachment":{
  "type":"template",
  "payload":{
    "template_type":"generic",
    "elements":[
       {
        "title":"Welcome to Peter\'s Hats",
        "subtitle":"We\'ve got the right hat for everyone.",
        "image_url":"https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/22549764_2123427824337889_5105946660671338465_n.jpg?oh=29a6de979d6c533832491eba162e135b&oe=5A6A5CFB",
        "buttons":[
          {
            "type":"postback",
            "title":"Start Chatting",
            "payload":"DEVELOPER_DEFINED_PAYLOAD"
          }
          ]
        },
          {
           "title":"Welcome to Peter\'s Hats",
           "subtitle":"We\'ve got the right hat for everyone.",

           "buttons":[
             {
               "type":"postback",
               "title":"Start Chatting",
               "payload":"DEVELOPER_DEFINED_PAYLOAD"
            }
          ]
        }
    ]
  }
}
}
