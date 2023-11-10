//Tilføj normal js her





//Det er her forskellige parameter omkring botten bliver bestemt fra. Kig i Botpress docs for mere information

window.botpressWebChat.init({
    // Replace <your-bot-id> and <your-client-id> with your actual bot and client IDs
    "botId": "6faf322c-9834-428e-a52d-a7de51856915",
    "clientId": "6faf322c-9834-428e-a52d-a7de51856915",

    // Set the URL for the Botpress WebChat JavaScript file and the messaging server
    "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
    "messagingUrl": "https://messaging.botpress.cloud",

    // Set the name of the bot that will be displayed in the WebChat interface
    "botName": "LEO GG's IT CHAT-BOT",

    //Det her virker ikke. Har kommenteret ud da den bare gør man ikke kan trykke på noget andet
    // Set the width of the WebChat container and layout to 100% (Full Screen)
    //"containerWidth": "100%25",
    //"layoutWidth": "100%25",
    
    //Sletter samtalen hos klienten efter fanen er lukket
    "useSessionStorage": true,

    // Hide the widget and disable animations
    "hideWidget": false,
    "disableAnimations": false,
});

// Opens up the Chatbot by default
// This lets users start chatting with the Chatbot without needing to click any buttons or menus.
//If statement bliver brugt for at tjekke som skærmen er stor nok til at åbne botten med det samme. 1440 er Pixels bred
if (window.innerWidth > 1440) {
    window.botpressWebChat.onEvent(
    function () {
        window.botpressWebChat.sendEvent({ type: "show" });
    },
    ["LIFECYCLE.LOADED"]
);
}
