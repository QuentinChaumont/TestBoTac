"use strict";

const bodyParser = require('body-parser');
const request = require('request');
const express = require('express');
var constant = require('./const');
var app = express();

const FB_TOKEN = "EAARkjAk57UoBAEVS01sduEfZCqR2eNthZADXLt5iZC6Xt1teuHZAsZCjL7bM1fUtS5FoAFWZBxRzP2NHQccNxUi8nZA0ZCVMs2dCtJwwgZCEkoXLIlDiFRAUCBN1F0Pdn5dB07ytThMZCZCLB196EyCIID2s9ED3RxpmWl2OMrV8bPsHwZDZD";
const FB_VERIFY = "test";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/', function (req, res) {
  res.send('salutt');
});


app.get('/webhook', function(req, res) {
  if (req.query['hub.verify_token'] === FB_VERIFY) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});


app.post('/webhook', function (req, res) {
  var data = req.body;

  // Make sure this is a page subscription
  if (data.object === 'page') {
    // Iterate over each entry - there may be multiple if batched
    data.entry.forEach(function(entry) {
      var pageID = entry.id;
      var timeOfEvent = entry.time;

      // Iterate over each messaging event
      entry.messaging.forEach(function(event) {
        if (event.message) {
          receivedMessage(event);
        } else {
          console.log("Webhook received unknown event: ", event);
        }
      });
    });

    // Assume all went well.
    //
    // You must send back a 200, within 20 seconds, to let us know
    // you've successfully received the callback. Otherwise, the request
    // will time out and we will keep trying to resend.
    res.sendStatus(200);
  }
});
// Incoming events handling
function receivedMessage(event) {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;
  var message = event.message;

  console.log("Received message for user %d and page %d at %d with message:",
    senderID, recipientID, timeOfMessage);
  console.log(JSON.stringify(message));

  var messageId = message.mid;

  var messageText = message.text;
  var messageAttachments = message.attachments;

  if (messageText) {
    // If we receive a text message, check to see if it matches a keyword
    // and send back the template example. Otherwise, just echo the text we received.
    switch (messageText) {
      case 'Menu':
        sendMessage(senderID, constant.textMenu, constant.quickMenu);
        break;
        case '📅 Sortir':
          sendMessage(senderID, constant.textSortir, constant.quickSortir);
          break;
          case "Halloween 👻":
            sendMessageEvent(senderID, constant.messageSpecial);
            break;
        case "💧 Boire":
          sendMessage(senderID, constant.textBoire, null);
          sendMessageEvent(senderID, null);
          break;

      default:
        sendMessage(senderID, constant.textDefault, constant.quickMenu);
        break;
    }
  } else if (messageAttachments) {
    sendMessage(senderID, "Message with attachment received", null);
  }
}

function receivedPostback(event) {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfPostback = event.timestamp;

  // The 'payload' param is a developer-defined field which is set in a postback
  // button for Structured Messages.
  var payload = event.postback.payload;

  console.log("Received postback for user %d and page %d with payload '%s' " +
    "at %d", senderID, recipientID, payload, timeOfPostback);

  // When a postback is called, we'll send a message back to the sender to
  // let them know it was successful
  sendMessage(senderID, "Postback called", null);
}

//////////////////////////
// Sending helpers
//////////////////////////
function sendMessageEvent(recipientId, messageEvent) {
  var menu = {
    recipient: {
      id: recipientId
    },
    "message":messageEvent
};
  callSendAPI(menu);
}

function sendMessage(recipientId, text, quickReplies) {
  var menu = {
    recipient: {
      id: recipientId
    },
    message: {
      text: text,
      quick_replies: quickReplies
    }
  };
  callSendAPI(menu);
}

function callSendAPI(messageData) {
  request({
    uri: 'https://graph.facebook.com/v2.10/me/messages',
    qs: { access_token: FB_TOKEN },
    method: 'POST',
    json: messageData

  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var recipientId = body.recipient_id;
      var messageId = body.message_id;

      console.log("Successfully sent generic message with id %s to recipient %s",
        messageId, recipientId);
    } else {
      console.error("Unable to send message.");
      console.error(response);
      console.error(error);
    }
  });
}

// Set Express to listen out for HTTP requests
// var server = app.listen(process.env.PORT || 3000, function () {
//   console.log("Listening on port %s", server.address().port);
// });
app.listen(8080)
console.log('Server is running.')
