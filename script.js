function sendMessage() {
    var userMessageInput = document.getElementById("userMessage");
    var userMessage = userMessageInput.value;

    if (userMessage.trim() !== "") {
        addUserMessage(userMessage);
        processUserMessage(userMessage);
        userMessageInput.value = "";
    }
}

function addUserMessage(message) {
    var chatLog = document.getElementById("chatLog");
    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = "<strong>You:</strong> " + message;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function addBotMessage(message) {
    var chatLog = document.getElementById("chatLog");
    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = "<strong>Chatbot:</strong> " + message;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function processUserMessage(message) {
    // Process user's message and generate bot's response
    // You can add your own logic here to handle various user queries

    // Example: Handle greetings
    if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
        addBotMessage("Hello! How can I assist you today?");
    } 
    // Example: Handle course information request
    else if (message.toLowerCase().includes("course") && message.toLowerCase().includes("information")) {
        addBotMessage("For course information, please visit our university website or contact the admissions office.");
    } 
    // Example: Handle general queries
    else {
        addBotMessage("I'm sorry, I couldn't understand your query. Please try asking a different question.");
    }
}

document.getElementById("userMessage").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { // Enter key
        event.preventDefault();
        sendMessage();
    }
});
