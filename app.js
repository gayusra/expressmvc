const express = require('express')
const app = express()
const {engine} = require('express-handlebars')
const {loginPage,dashboards,loginProcess} = require('./controllers/userControllers')
const bodyparser = require('body-parser')



app.engine('hbs',engine({extname:'hbs',defaultLayout:false}))
app.set('view engine','hbs')
app.use(express.urlencoded({extended:false}))


app.get('/',loginPage)
app.get('/dashboards',dashboards)
app.post('/login',loginProcess)

app.listen(8080,()=>{
    console.log('server is running on the port')
})



