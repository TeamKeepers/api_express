let notes = [
    { id: 1, content: "Let's try Express", date: "2019-05-30T17:30:31.098Z", important: true }, 
    { id: 2, content: "Confident about playing 100% JS ?", date: "2019-05-30T18:39:34.091Z", important: false }, 
    { id: 3, content: "Not sure but let's give it a try", date: "2019-05-30T19:20:14.298Z", important: true }
]

// ********* VANILLA NODE *********

// import http from "http"
// const http = require("http");

// const app = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'application/json' });
//     response.end(JSON.stringify(notes))
// })

// const PORT = 3001
// app.listen(PORT)
// console.log(`Server running on port ${PORT}`)

// ********* EXPRESS *********

const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    response.send('<h1>Hellu Worldddddd!</h1>')
})
  
app.get('/api/notes', (request, response) => {
    // console.log(request.get('Content-Type'))
    response.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
    // console.log("My request", req)
    const id = Number(req.params.id)
    // console.log(id)
    const note = notes.find(note => note.id === id)
    // console.log(note)
    note ? res.json(note) : res.status(404).end();
})

app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    // or parseInt
    notes = notes.filter(note => note.id !== id)
    res.status(204).end()
})

app.post("/api/notes", (req, res) => {
    const body = req.body
    if(!body.content)
    {
        return res.status(400).json({
            error: "Content is missing"
        })
    }
    // For id, we also could use Math.max(...notes.map(n => n.id))
    const note = {
        id: notes.length + 1,
        content: body.content,
        important: body.important || false,
        date: new Date()
    }
    notes = notes.concat(note)
    res.json(note)
})

app.patch("/api/notes/:id", (req, res) => {
    const id = Number(req.params.id)
    const body = req.body
    const note = notes.find(note => note.id === id)
    // console.log(note)
    if(note) {
        for(let element in body)
        {
            note[element] = body[element] 
        }
    } else {
        return res.status(404).json()
    }
    res.json(note)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})