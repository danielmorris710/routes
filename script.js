const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

const fs = require('fs') 
app.engine('hypatia', (filePath, options, callback) => { 
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<h2>'+ options.content + '</h2>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') 
app.set('view engine', 'hypatia') 



app.get('/about', (req, res) => {
    res.render('template', { title: 'About', message: 'Hello there!', content: 'I am Daniel Morris' })
})

app.get('/childhood', (req, res) => {
    res.render('templateTwo', { title: 'Childhood', message: 'South Bronx!', content: 'I was born and raised in the Bronx, NY.' })
})

app.get('/sports', (req, res) => {
    res.render('template', { title: 'Sports', message: 'I grew up playing baseball.', content: 'I played short stop and pitcher.' })
})

app.get('/teams', (req, res) => {
    res.render('templateTwo', { title: 'Teams', message: 'My dad was a huge Mets fan.', content: 'My dad was a huge Mets fan.' })
})

app.get('/defend', (req, res) => {
    res.render('template', { title: 'Defend', message: 'I was a brown belt in American Goju.', content: 'I was in karate from the age of 7 to 14.' })
})

app.get('/education', (req, res) => {
    res.render('templateTwo', { title: 'Education', message: 'Go BCHS.', content: 'I graduated highschool in 2010.' })
})

app.get('/work', (req, res) => {
    res.render('template', { title: 'Work', message: 'I started my work career early on.', content: 'Working at Yankee Stadium at age 16.' })
})

app.get('/location', (req, res) => {
    res.render('templateTwo', { title: 'Location', message: 'In 2011 I moved to Texas.', content: 'Where I became an oil rigger.' })
})

app.get('/passion', (req, res) => {
    res.render('template', { title: 'Passion', message: 'As a child I always loved music.', content: 'I began as a singer then puberty hit and I was forced to rap. As an adult I became a studio engineer/artist.' })
})

app.get('/future', (req, res) => {
    res.render('templateTwo', { title: 'Future', message: 'In 2022 I made a decision to further my career.', content: 'I am now on my way to become a Full Stack Developer!' })
})


app.listen(port,() => {
    console.log('I am listening on port' , port);
})