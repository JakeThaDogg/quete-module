var express = require('express')
var router = express.Router()
const nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('coucou-pug', { sayHello: 'Hello buddy', title: 'Yolo' })
})

router.get('/superMiddleware', function (req, res, next) {
  console.log('hello middleware')
  next()
},
function (req, res, next) {
  res.send('hello world')
})

/*

router.get('/askForCookiesRecipe', function (req, res, next) {
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'poirier.dev@gmail.com',
      pass: ''
    }
  })

  transporter.sendMail({
    from: 'Da MVP Wildr <poirier.dev@gmail.com',
    to: 'supergrandma@yopmail.com',
    subject: 'Give me your cookie recipe pls',
    text: 'pls',
    html: '<i>pls I\'ve been a good boy recently</i>'
  }, (error, response) => {
      if (error) {
          console.log(error)
      } else {
          console.log("Message sent: " + response.message)
      }
  })

  res.render('recipe', { giveRecipe: 'Dont fuk wit me', title: 'hello grandma'})
})

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'poirier.dev@gmail.com',
    pass: ''
  }
})

transporter.sendMail({
  from: 'Da MVP Wildr <poirier.dev@gmail.com',
  to: 'supergrandma@yopmail.com',
  subject: 'Give me your cookie recipe pls',
  text: 'pls',
  html: '<i>pls I\'ve been a good boy recently</i>'
}, (error, response) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Message sent: " + response.message)
    }
})
*/


router.post('/forms-:num(\\d+)', (req, res) => {
  console.log(req.params.num)
  console.log(req.query.level)
  console.log(req.body.username)
})

module.exports = router
