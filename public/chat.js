
const socket = io();

let message = document.getElementById("message");  
let userName = document.getElementById("userName");  
let btn = document.getElementById("send");  
let output = document.getElementById("output");  
let actions = document.getElementById("actions");  

btn.addEventListener("click", () => {
    socket.emit("chat: message", {
        message: message.value,
        userName: userName.value
    });
})

message.addEventListener("keypress", () => {
    socket.emit("chat: typing", userName.value);
});

socket.on("chat: message", (data) => {
    output.innerHTML +=  `<p>
        <strong>${data.userName}</stong>: ${data.message}
    </p>`;
});

socket.on("chat: typing", (data) => {
    actions.innerHTML = `<p><em>${data} is typing a message...</em></p>`
})