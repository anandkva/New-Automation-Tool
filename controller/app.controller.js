const { exec, execFile } = require("child_process");
const socketIO = require("socket.io");
const io = socketIO();
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const bodyParser = require("body-parser");
app.io = io;
io.on("connection", (socket) => {
    app.socketId = socket.id;
    console.log("Connected");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const compute = (req, res) => {
    let child = exec(
        `npx cypress open --env host=${req.body.url} --spec cypress/integration/${req.body.task}/**/*`,
        (error, stdout, stderr) => {
            if (error) {
                res.end();
            }
            if (stdout) {
                console.log(req.app.socketId);
                req.app.io.to(req.app.socketId).emit("result", {
                    filePath: "/mochawesome.html",
                });
                res.end();
            }
            if (stderr) {
                res.end();
            }
        },
        {
            detached: true,
            stdio: ["ignore", 1, 2],
        }
    );
    child.unref();
    child.stdout.on("data", function (data) {
        req.app.io.to(req.app.socketId).emit("logdata", data.toString());
        console.log(data.toString());
    });
};
const gitcompute = (req, res) => {
    let child = exec(
        `jest --verbose task1/index.test.js`,
        (error, stdout, stderr) => {
            if (error) {
                console.log(error);
                res.end();
            }
            if (stdout) {
                console.log(req.app.socketId);
                req.app.io.to(req.app.socketId).emit("git-result", {
                    filePath: "/mochawesome.html",
                });
                res.end();
            }
            if (stderr) {
                console.log(stderr);
                res.end();
            }
        },
        {
            detached: true,
            stdio: ["ignore", 1, 2],
        }
    );
    child.unref();
    child.stdout.on("data", function (data) {
        req.app.io.to(req.app.socketId).emit("git-logdata", data.toString());
        console.log(data.toString());
    });
};
module.exports = {
    compute,
    gitcompute
}
