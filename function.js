const socketIO = require("socket.io");
const io = socketIO();
var socket = io();
    socket.on("connect", function () {
      document.getElementById("result-frame").style.display = "none";
      console.log(socket);
    });

    socket.on("result", function (result) {
      console.log(result.filePath);
      document.getElementById("logScreen").style.display = "none";
      document.getElementById("result-frame").style.display = "block";
      document.getElementById("result-frame").src = result.filePath;
      window.scrollTo(0, 0);
    });

    socket.on("logdata", function (data) {
      let myLi = document.createElement("li");
      console.log(myLi);
      myLi.innerHTML = data;
      let ul = document.getElementById("logData");
      ul.appendChild(myLi);
      window.scrollTo(0, document.body.scrollHeight);
      console.log(data);
    });

    document
      .getElementById("url-form")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        if (document.getElementById("url-type").value == "github") {
          fetch("/git-compute", {
            method: "POST",
            body: JSON.stringify({
              url: document.getElementById("url").value,
            }),
            headers: { "Content-Type": "application/json" },
          });
        } else {
          fetch("/compute", {
            method: "POST",
            body: JSON.stringify({
              url: document.getElementById("url").value,
              task: document.getElementById("task-selection").value,
            }),
            headers: { "Content-Type": "application/json" },
          });
        }
      });