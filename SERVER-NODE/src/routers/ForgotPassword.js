const express = require('express')
const router = new express.Router()
const sgMail = require('@sendgrid/mail')

const key = "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"

sgMail.setApiKey(key)

router.get('/sendEmail', (req,res)=> {
    sgMail.send({
        to: 'patelraj777777@gmail.com',
        from: 'deepatel099@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, Deep . Let me know how you get along with the app. OTP`
    }, (error, results)=>{
       if(error) {
           return res.status(400).send(error)
       } 
       res.status(200).send(results)
    })
})

router.post('/admin-forgot', async (req, res) => {
    const { email, otp } = req.body

    sgMail.send({
       
        to: email,
        from: 'deepatel099@gmail.com',
        subject: 'Child Care! Request for your New Password',
        text: `Hii , 
    Greetings! 

You are just a step away from accessing your account. We are sharing a verification code to access your account

Once you have verified the code, you will be prompted to set a new password immediately. This is to ensure that only you have access to your account

Admin, Here is your OTP : ${otp}`
    },(error, results)=>{
        if(error) {
 
            return res.status(400).send(error)
        }
        res.status(200).send(results)
    })
 })

 router.put('/admin-forgot/:email', async (req, res) => {
    //const _id=req.params.id
    const { email, password } = req.body

    const sql=`update admin set password='${password}' where username='${email}'`
        console.log(sql)
        connection.query(sql, (error, results)=>{
            if(error){
                return res.status(400).send(error)
            }
            res.status(200).send(results)
        })
})



//forgot password 
router.post('/parents-forgot', async (req, res) => {
    const { email, otp } = req.body

    sgMail.send({
       
        to: email,
        from: 'deepatel099@gmail.com',
        subject: 'Child Care! Request for your New Password',
        text: `Hii, 
        
    Greetings! 
        
You are just a step away from accessing your account. We are sharing a verification code to access your account
        
Once you have verified the code, you will be prompted to set a new password immediately. This is to ensure that only you have access to your account
        
Parents, Here is your OTP : ${otp}`
    },(error, results)=>{
        if(error) {
 
            return res.status(400).send(error)
        }
        res.status(200).send(results)
    })
 })
 
    
router.put('/parents-forgot/:email', async (req, res) => {
    //const _id=req.params.id
    const { email, password } = req.body
        const sql=`update parents set password='${password}' where email='${email}'`
        console.log(sql)
        connection.query(sql, (error, results)=>{
            if(error){
                return res.status(400).send(error)
            }
            res.status(200).send(results)
        })
})

router.post('/center-forgot', async (req, res) => {
    const { email, otp } = req.body

    sgMail.send({
       
        to: email,
        from: 'deepatel099@gmail.com',
        subject: 'Child Care! Request for your New Password',
        text: `Hii , 
    Greetings! 

You are just a step away from accessing your account. We are sharing a verification code to access your account

Once you have verified the code, you will be prompted to set a new password immediately. This is to ensure that only you have access to your account

Center, Here is your OTP : ${otp}`
    },(error, results)=>{
        if(error) {
 
            return res.status(400).send(error)
        }
        res.status(200).send(results)
    })
 })

 router.put('/center-forgot/:email', async (req, res) => {
    //const _id=req.params.id
    const { email, password } = req.body

    const sql=`update center set password='${password}' where email_id='${email}'`
        console.log(sql)
        connection.query(sql, (error, results)=>{
            if(error){
                return res.status(400).send(error)
            }
            res.status(200).send(results)
        })
})




module.exports =router