const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
var cors = require('cors')
const auth = require("./authentication")
const setUpAuth = require('./login-utils/init-app')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

setUpAuth(app);

const schoolRouter = require('./routes/schoolRouter')
const userRouter = require('./routes/userRouter')
const eventRouter = require('./routes/eventRouter')
const loginRouter = require('./routes/loginRouter')
const schoolSearchRouter = require('./routes/schoolSearchRouter')

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.use('/', loginRouter)
app.use('/school', auth.authUser, schoolRouter)
app.use('/users', auth.authUser, userRouter)
app.use('/event', auth.authUser,eventRouter)
app.use('/', schoolSearchRouter)

const hostname = process.env.WEB_HOSTNAME;
const port = process.env.DB_HOSTPORT;

app.listen(port, hostname, function () {
    console.log('The ' + hostname + ' server is listening to port ' + port)
})