const express = require('express')
const fileUpload = require('express-fileupload')
const centerRouter = require('./routers/center')
const centerfacilityRouter= require('./routers/centerfacility')
const childrenRouter = require('./routers/children')
const parentsRouter = require('./routers/parents')
const feedbackRouter = require('./routers/feedback')
const galleryRouter = require('./routers/gallery')
const adminRouter=require('./routers/admin')
const ForgotPasswordRouter = require('./routers/ForgotPassword')
var cors = require('cors')
var path = require('path');

const app = express()
let uploadFolder = express.static("uploads")
console.log(uploadFolder)
app.use(uploadFolder)
app.use(express.json())
app.use(fileUpload())
app.use(cors())
app.use(centerRouter)
app.use(parentsRouter)
app.use(centerfacilityRouter)
app.use(childrenRouter)
app.use(feedbackRouter)
app.use(galleryRouter) 
app.use(adminRouter)
app.use(ForgotPasswordRouter)


const port = 3001;

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})


