const express = require('express')

const app = express()

const cors = require("cors");
app.use(cors({ origin: "*" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
4
app.get("/", (req, res) => {
    let pos = []
    pos[0] = {
        name: "origin",
        lat: Math.random() * (55 - 53) + 53,
        lng: Math.random() * (94 - 91) + 91,
    }
    for (let i = 0; i < 2; i++) {
        pos[i + 1] = {
            name: i + 1,
            lat: Math.random() * (55 - 53) + 53,
            lng: Math.random() * (95 - 91) + 91,
        }
    }
    pos.push(pos[0])
    res.send(JSON.stringify(pos))
})
const PORT = process.env.PORT || 8085;

app.listen(PORT, () => {
    console.log(`Server is Listening on ${PORT}`)
})