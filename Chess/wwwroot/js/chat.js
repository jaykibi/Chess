"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

//Disable send button until connection is established
document.getElementById("msg_send_btn").disabled = true;

connection.on("ReceiveMessage", function (user, message) {
    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var encodedMsg = user + " says: " + msg;
    var li = document.createElement("li");
    li.textContent = encodedMsg;
    document.getElementById("messagesList").appendChild(li);
});

connection.start().then(function () {
    document.getElementById("msg_send_btn").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

/*
document.getElementById("msg_send_btn").addEventListener("click", function (event) {
    var user = document.getElementById("user-name").textContent;
    var message = document.getElementById("write_msg").value;
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});
*/

document.getElementById("write_msg").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        var user = document.getElementById("user-name").textContent;
        var message = document.getElementById("write_msg").value;
        connection.invoke("SendMessage", user, message).catch(function (err) {
            return console.error(err.toString());
        });
        event.preventDefault();
        document.getElementById("msg_send_btn").click();
        $('#write_msg').val(''); // using $jQuery to clear the input field
    }
})